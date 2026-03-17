import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: "My Todo List",
            headerStyle: styles.header,
            headerTintColor: '#000000',
            headerTitleStyle: styles.headerText,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    backgroundColor: '#ffffff',
    height: 110,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
