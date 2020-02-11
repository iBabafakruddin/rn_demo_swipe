import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

class ClassComp extends React.Component {
  render() {
    return (
      <View>
        <Text>Class Component</Text>
      </View>
    );
  }
}

const FunComp = () => {
  return (
    <View>
      <Text>Funcion Component</Text>
    </View>
  );
};

const App = () => {
  return (
    <View>
      <ClassComp />
      <FunComp />
    </View>
  );
};
export default App;
