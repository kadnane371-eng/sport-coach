import { create } from "zustand";
import { Session } from "../types/session";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppState = {
  steps: number;
  dailyGoal: number;
  distance: number;
  calories: number;

  sessions: Session[];

  profileImage: string | null;

setProfileImage: (uri: string) => void;

  setSteps: (steps: number) => void;
  addSession: (session: Session) => void;
  removeSession: (id: string) => void;

  loadSessions: () => Promise<void>;
saveSessions: () => Promise<void>;
};



export const useStore = create<AppState>((set) => ({
  steps: 0,
  dailyGoal: 10000,
  distance: 0,
  calories: 0,

  sessions: [],

  profileImage: null,

setProfileImage: (uri) =>
  set({
    profileImage: uri,
  }),

  setSteps: (steps) =>
    set({
      steps,
      distance: Number((steps * 0.0008).toFixed(2)),
      calories: Number((steps * 0.04).toFixed(0)),
    }),

  
    
  addSession: (session) =>
  set((state) => {
    const updatedSessions = [
      ...state.sessions,
      session,
    ];

    AsyncStorage.setItem(
      "sessions",
      JSON.stringify(updatedSessions)
    );

    

    return {
      sessions: updatedSessions,
    };
  }),

  
    removeSession: (id) =>
  set((state) => {
    const updatedSessions =
      state.sessions.filter(
        (session) => session.id !== id
      );

    AsyncStorage.setItem(
      "sessions",
      JSON.stringify(updatedSessions)
    );

    return {
      sessions: updatedSessions,
    };
  }),
    loadSessions: async () => {
  const data = await AsyncStorage.getItem("sessions");

  if (data) {
    set({
      sessions: JSON.parse(data),
    });
  }
},

saveSessions: async () => {
  const sessions = useStore.getState().sessions;

  await AsyncStorage.setItem(
    "sessions",
    JSON.stringify(sessions)
  );
},
}));