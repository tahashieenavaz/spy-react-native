import { View, Text, StyleSheet } from "react-native";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
