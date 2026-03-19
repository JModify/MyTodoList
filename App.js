import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  // Create stack navigator with required screens added.
  // Initial route set to home page and app status bar set to dark.
  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
