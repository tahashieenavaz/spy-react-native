import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

export default function PlayerButtons({
  playerCount,
  spyCount,
  playerStack,
  navigation,
}) {
  /**
   * Create an array of false value to keep track of buttons. In order to understand which
   * buttons have been clicked before. So when a button is clicked we will update this
   * array using its setter.
   */
  const [watched, setWatched] = useState(
    Array.from({ length: playerCount + spyCount }, () => false)
  );

  const revealACard = (index) => {
    if (playerStack[index]) {
      navigation.navigate('ShowRule', {
        isSpy: false,
      });
    } else {
      navigation.navigate('ShowRule', {
        isSpy: true,
      });
    }
    setWatched(
      watched.map((_, p) => {
        if (index == p) {
          return true;
        }
        return _;
      })
    );
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
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
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
});
