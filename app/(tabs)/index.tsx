import { View, Text, StyleSheet, Button } from "react-native";
import ProgressRing from "../../components/ProgressRing";
import { useStore } from "../../store/useStore";
import usePedometer from "../../hooks/usePedometer";

export default function Home() {
  usePedometer();
  const { steps, dailyGoal, distance, calories } = useStore();

  const setSteps = useStore((state) => state.setSteps);

  const progress = Math.min(
    (steps / dailyGoal) * 100,
    100
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Native Coach Tracker
      </Text>

      <ProgressRing progress={progress} />

      <View style={styles.card}>
        <Text style={styles.label}>
          Todays Steps
        </Text>

        <Text style={styles.value}>
          {steps}
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.label}>
            Distance
          </Text>

          <Text style={styles.valueSmall}>
            {distance} km
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.label}>
            Calories
          </Text>

          <Text style={styles.valueSmall}>
            {calories} kcal
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Add 100 Steps"
          onPress={() => setSteps(steps + 100)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0F172A",
  },

  title: {
    color: "#CCFF00",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 50,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 20,
  },

  label: {
    color: "#94A3B8",
    fontSize: 16,
  },

  value: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  smallCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 16,
  },

  valueSmall: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});