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
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const sessions = useStore((state) => state.sessions);

  const removeSession = useStore(
    (state) => state.removeSession
  );

  const loadSessions = useStore(
    (state) => state.loadSessions
  );

  const profileImage = useStore(
    (state) => state.profileImage
  );

  const setProfileImage = useStore(
    (state) => state.setProfileImage
  );

  const pickImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        History
      </Text>

      {profileImage && (
        <Image
          source={{ uri:'assets/sport.jpg' }}
          style={styles.image}
        />
      )}

      <Button
        title="Choose Photo"
        onPress={pickImage}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 90,
    height: 90,
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