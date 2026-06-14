import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useStore } from "../../store/useStore";


export default function Session() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const addSession = useStore(
  (state) => state.addSession
);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  
  const handleStop = () => {
  setRunning(false);

  addSession({
    id: Date.now().toString(),
    duration: seconds,
    date: new Date().toLocaleDateString(),
  });

  setSeconds(0);
};



  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {seconds}s
      </Text>

      

      <View style={styles.buttons}>
        <Button
          title="Start"
          onPress={handleStart}
        />

        <Button
          title="Pause"
          onPress={handlePause}
        />

        <Button
          title="Stop"
          onPress={handleStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0F172A",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    
  },

  timer: {
    color: "#CCFF00",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  buttons: {
    gap: 15,
  },
});