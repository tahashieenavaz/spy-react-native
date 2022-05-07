import { StatusBar } from 'expo-status-bar';
import Button from '../Button';
import Logo from '../Logo';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Below view is added to force push next flex element to center of stack */}
      <View></View>
      <View style={{ alignItems: 'center' }}>
        <Logo />
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 70 }}>
          S.P.Y
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: '100',
            fontSize: 27,
            opacity: 0.5,
          }}
        >
          Divide & Rule
        </Text>
        <Button
          style={{ marginTop: 40 }}
          onPress={() =>
            navigation.navigate('Settings', {
              randomNumber: ~~(200 * Math.random()),
            })
          }
          title="Start"
        />
      </View>
      <Text
        style={{ justifyContent: 'flex-end', marginBottom: 30, color: '#fff' }}
      >
        Developed By Taha Shieenavaz
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00297A',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
