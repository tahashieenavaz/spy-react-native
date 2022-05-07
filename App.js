import { NavigationContainer } from '@react-navigation/native';
import Homepage from './components/pages/Homepage';
import SettingsPage from './components/pages/SettingsPage';
import GamePage from './components/pages/GamePage';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Settings" component={SettingsPage} />
          <Stack.Screen name="Game" component={GamePage} />
        </Stack.Group>
        <Stack.Group options={{ presenation: 'modal' }}></Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
