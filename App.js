import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './views/login'     
import Register from './views/register'     
import Register_Two from './views/register_two'     
import Choices from './views/choices'  

import React from "react";
import Routes from "./src/pages/routes";

export default function App() {
  return  <Routes />
}
