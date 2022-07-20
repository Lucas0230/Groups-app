
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";


import Login from "./login";
import Register from "./register";
import RegisterTwo from "./register_two";
import Choices from "./choices";
import Home from "./home";
import Search from "./search";
import Create from "./create_group";
import Groups from "./groups";

import Chat from './chat'

import Preload from './preload'
const AppStack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Preload" screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>

        <AppStack.Screen name="Preload" component={Preload} />

        <AppStack.Screen name="Create" component={Create} />
        <AppStack.Screen name="Login" component={Login} />

        <AppStack.Screen name="Chat" component={Chat} />

        <AppStack.Screen name="Choices" component={Choices} />

        <AppStack.Screen name="Groups" component={Groups} />

        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Search" component={Search} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="RegisterTwo" component={RegisterTwo} />
      </AppStack.Navigator>
    </NavigationContainer >
  );
}