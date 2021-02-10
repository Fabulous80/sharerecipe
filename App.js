import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Custom Components/Screens/Assests.
import Recipe from "./Screens/Recipe.js";
import About from "./Screens/About.js";
import FavList from "./Screens/FavList.js";
import Tab from "./Navigation/Tab.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Tab} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="FavList" component={FavList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
