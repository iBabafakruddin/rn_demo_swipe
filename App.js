import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import ShelfScreen from "./src/screens/ShelfScreen";
import ReaderScreen from "./src/screens/ReaderScreen";

const bottomTabBar = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Shelf: { screen: ShelfScreen },
  Read: { screen: ReaderScreen }
});

export default createAppContainer(bottomTabBar);
