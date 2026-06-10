import { Tabs } from "expo-router";
import { House, Activity, User } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#70E000',
        tabBarInactiveTintColor: '#edf0e7ff',
        tabBarStyle:{
            backgroundColor: '#0c1013ff',
            borderTopWidth: 0,
            elevation: 0,
        }
     }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home", 
          tabBarIcon: ({ color, size }) => (
            <House color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="session"
        options={{
          title: "Session",
          tabBarIcon: ({ color, size }) => (
            <Activity color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}