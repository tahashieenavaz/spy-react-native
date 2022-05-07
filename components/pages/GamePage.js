import { View, Text, StyleSheet } from 'react-native';
import { falseArray, randomizeArray, trueArray } from '../../helpers';
import words from '../../words.json';

export default function SettingsPage({ route }) {
  const { spyCount, playerCount } = route.params;
  const theWord = words[~~(Math.random() * words.length)];
  /**
   * False represents a normal player who knows what theWord is, and a true
   * represents an spy.
   * I used Javascript's native sort function to randomize naively generated array and encapsulated
   * the logic within a function called randomizeArray in helpers.js file.
   */
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
