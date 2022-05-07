import { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { falseArray, randomizeArray, trueArray } from '../../helpers';
import words from '../../words.json';
import Button from '../Button';

export default function SettingsPage({ route }) {
  const { spyCount, playerCount } = route.params;
  let theWord = null;
  useState(() => {
    theWord = words[~~(Math.random() * words.length)];
  }, []);
  /**
   * False represents a normal player who knows what theWord is, and a true
   * represents an spy.
   * I used Javascript's native sort function to randomize naively generated array and encapsulated
   * the logic within a function called randomizeArray in helpers.js file.
   */
  const playerStack = randomizeArray([
    ...falseArray(playerCount - spyCount),
    ...trueArray(spyCount),
  ]);

  /**
   * Create an array of false value to keep track of buttons. In order to understand which
   * buttons have been clicked before. So when a button is clicked we will update this
   * array using its setter.
   */
  const [watched, setWatched] = useState(
    Array.from({ length: Number(playerCount) }, () => false)
  );
  const revealACard = (index) => {
    let isSpy = true;
    if (playerStack[index]) {
      isSpy = false;
    }
    setWatched(
      watched.map((_, p) => {
        if (index == p) {
          return true;
        }
        return _;
      })
    );
    if (isSpy) {
      Alert.alert('Oops!', 'You are an SPY!');
    } else {
      Alert.alert('Mmm', theWord);
    }
  };
  return (
    <ScrollView style={{ flex: 1, paddingVertical: 30 }}>
      <View style={styles.container}>
        {watched.map((status, i) => {
          if (status) {
            return (
              <Button
                style={{ ...styles.button, opacity: 0.5 }}
                key={i}
                title="Already Revealed"
              />
            );
          } else {
            return (
              <Button
                key={i}
                title="Click to reveal"
                style={styles.button}
                onPress={() => revealACard(i)}
              />
            );
          }
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
