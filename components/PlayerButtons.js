import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import Button from './Button';

export default function PlayerButtons({
  playerStack,
  watched,
  setWatched,
  theWord,
}) {
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
