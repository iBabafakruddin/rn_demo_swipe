import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import ShelfScreen from "./src/screens/ShelfScreen";
import ReaderScreen from "./src/screens/ReaderScreen";
import { Provider as BooksProvider } from "./src/context/BooksContext";
const bottomTabBar = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Shelf: { screen: ShelfScreen },
  Read: { screen: ReaderScreen }
});

const App = () => {
  const Root = createAppContainer(bottomTabBar);
  return (
    <BooksProvider>
      <Root />
    </BooksProvider>
  );
};

export default App;
