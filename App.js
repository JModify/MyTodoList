import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/screens/Home";
import AddTodo from './src/screens/AddTodo';

const Stack = createStackNavigator();

export default function App() {
  // Create stack navigator with required screens added.
  // Initial route set to home page and app status bar set to dark.

  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title: 'My Todo List',
          headerStyle: {
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            height: 110,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
        />
        <Stack.Screen 
          name="AddTodo" 
          component={AddTodo}
          options={{
            title: 'Add New Todo',
            headerStyle: {
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              height: 110,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerBackTitle: 'Home'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}