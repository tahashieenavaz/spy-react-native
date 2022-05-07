import { NavigationContainer } from '@react-navigation/native';
import Homepage from './components/pages/Homepage';
import SettingsPage from './components/pages/SettingsPage';
import GamePage from './components/pages/GamePage';
import ShowRulePage from './components/pages/ShowRulePage';
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
        <Stack.Group options={{ presentation: 'modal' }}>
          <Stack.Screen
            name="ShowRule"
            component={ShowRulePage}
            options={{
              mode: 'modal',
              headerTransparent: true,
              // headerMode: 'none',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
