import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Homepage from "./components/pages/Homepage";
import SettingsPage from "./components/pages/SettingsPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="GamePage" component={GamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
