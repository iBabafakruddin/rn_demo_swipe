import React from "react";
import { View, Text } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

class ClassComp extends React.Component {
  render() {
    return (
      <View>
        <Text>Class Component, Name is {this.props.name}</Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <View>
      <ClassComp name="Admin" />
      <HomeScreen name="Admin" />
    </View>
  );
};
export default App;
