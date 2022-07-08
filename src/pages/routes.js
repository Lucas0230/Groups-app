
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";


import Login from "./login";
import Register from "./register";
import RegisterTwo from "./register_two";
import Choices from "./choices";
import Home from "./home";
import Search from "./search";

const AppStack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
    gestureEnabled: true,
    gestureDirection: "horizontal",
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
  }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Search" component={Search} />
        
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="RegisterTwo" component={RegisterTwo} />
        <AppStack.Screen name="Choices" component={Choices} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}