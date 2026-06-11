import { create } from "zustand";
import { Session } from "../types/session";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppState = {
  steps: number;
  dailyGoal: number;
  distance: number;
  calories: number;

  sessions: Session[];

  setSteps: (steps: number) => void;
  addSession: (session: Session) => void;
  removeSession: (id: string) => void;
};

export const useStore = create<AppState>((set) => ({
  steps: 0,
  dailyGoal: 10000,
  distance: 0,
  calories: 0,

  sessions: [],

  setSteps: (steps) =>
    set({
      steps,
      distance: Number((steps * 0.0008).toFixed(2)),
      calories: Number((steps * 0.04).toFixed(0)),
    }),

  addSession: (session) =>
    set((state) => ({
      sessions: [...state.sessions, session],
    })),

  removeSession: (id) =>
    set((state) => ({
      sessions: state.sessions.filter(
        (session) => session.id !== id
      ),
    })),
}));