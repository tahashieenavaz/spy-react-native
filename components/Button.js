import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ title = "Go", onPress, style }) {
  return (
    <Pressable style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    color: "#222",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
