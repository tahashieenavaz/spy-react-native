import { View, Text, StyleSheet } from 'react-native';
import { falseArray, randomizeArray, trueArray } from '../../helpers';
import words from '../../words.json';

export default function SettingsPage({ route }) {
  const { spyCount, playerCount } = route.params;
  const theWord = words[~~(Math.random() * words.length)];
  const playerStack = randomizeArray([
    ...falseArray(playerCount),
    ...trueArray(spyCount),
  ]);
  return (
    <View style={styles.container}>
      <Text>GamePage Page {theWord}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
