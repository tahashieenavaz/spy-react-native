import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import Button from "./components/Button";
import Logo from "./Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 70 }}>
        S.P.Y
      </Text>
      <Text
        style={{
          color: "#fff",
          fontWeight: "100",
          fontSize: 27,
          opacity: 0.5,
        }}
      >
        Divide & Rule
      </Text>
      <Button
        style={{ marginTop: 40 }}
        onPress={() => Alert.alert("Good", "asdasd")}
        title="Start"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00297A",
    alignItems: "center",
    justifyContent: "center",
  },
});
