import React from "react";
import { View, Text } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ShelfScreen from "./src/screens/ShelfScreen";
import ReaderScreen from "./src/screens/ReaderScreen";

const App = () => {
  return (
    <View>
      <HomeScreen />
      <ShelfScreen />
      <ReaderScreen />
    </View>
  );
};
export default App;
