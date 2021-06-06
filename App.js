import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/mainScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import WelcomeScreen from "./screens/welcomeScreen";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
});

const AppContainer = createAppContainer(switchNavigator);
