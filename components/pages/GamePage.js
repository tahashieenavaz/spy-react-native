import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { falseArray, randomizeArray, trueArray } from '../../helpers';
import words from '../../words.json';
import PlayerButtons from '../PlayerButtons';

export default function SettingsPage({ route, navigation }) {
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
    <PlayerButtons
      playerStack={playerStack}
      playerCount={playerCount}
      spyCount={spyCount}
      navigation={navigation}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
