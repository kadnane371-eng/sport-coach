import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { useStore } from "../../store/useStore";
import { useEffect } from "react";

export default function Profile() {
  const sessions = useStore((state) => state.sessions);

  const removeSession = useStore(
    (state) => state.removeSession
  );

  const loadSessions = useStore(
    (state) => state.loadSessions
  );

  useEffect(() => {
    loadSessions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        History
      </Text>

      <Image
        source={require("../../assets/sport.jpg")}
        style={styles.image}
      />

      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>
              Duration: {item.duration}s
            </Text>

            <Text>
              Date: {item.date}
            </Text>

            <Button
              title="Delete"
              onPress={() =>
                removeSession(item.id)
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  title: {
    color: "#CCFF00",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
     textAlign: "center",
    
    
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});