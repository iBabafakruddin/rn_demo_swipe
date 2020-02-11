import React from "react";
import { View, Text } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

class ClassComp extends React.Component {
  render() {
    return (
      <View>
        <Text>Class Component</Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <View>
      <ClassComp />
      <HomeScreen />
    </View>
  );
};
export default App;
