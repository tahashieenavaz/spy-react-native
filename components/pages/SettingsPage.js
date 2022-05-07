import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../Button';

export default function SettingsPage({ navigation }) {
  const [playerCount, setPlayerCount] = useState(10);
  const [spyCount, setSpyCount] = useState(2);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Number of Players</Text>
        <TextInput
          style={styles.input}
          defaultValue="10"
          keyboardType="numeric"
          onChangeText={(newCount) => setPlayerCount(newCount)}
        />
        <Text style={styles.text}>Number of Spies</Text>
        <TextInput
          style={styles.input}
          defaultValue="3"
          keyboardType="numeric"
          onChangeText={(newCount) => setSpyCount(newCount)}
        />
        <Button
          title="Play!"
          textColor="white"
          style={styles.button}
          onPress={() => navigation.navigate('Game', { playerCount, spyCount })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: '#ececec',
    marginBottom: 20,
    width: 200,
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#00297A',
    color: '#fff',
  },
  text: {
    marginBottom: 5,
  },
});
