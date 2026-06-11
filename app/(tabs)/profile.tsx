import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
} from "react-native";

import { useStore } from "../../store/useStore";

export default function Profile() {
  const sessions = useStore(
    (state) => state.sessions
  );

  const removeSession = useStore(
    (state) => state.removeSession
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        History
      </Text>

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
    color :"#white"
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});