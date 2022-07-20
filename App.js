import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './views/login'
import Register from './views/register'
import Register_Two from './views/register_two'
import Choices from './views/choices'

import React from "react";
import Routes from "./src/pages/routes";

import UserContextProvider from './src/contexts/UserContext';

// import {
//   useFonts,
//   Inter_900Black,
// } from '@expo-google-fonts/inter';


import {
  useFonts,
  Voltaire_400Regular,
} from '@expo-google-fonts/voltaire';

export default function App() {

  let [fontsLoaded] = useFonts({
    Voltaire_400Regular,
  });

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}
