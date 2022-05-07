import { View, Text, StyleSheet } from 'react-native';

export default function SettingsPage({ route }) {
  const { spyCount, playerCount } = route.params;
  return (
    <View style={styles.container}>
      <Text>GamePage Page {playerCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
