import React from "react";
import { View, Text } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text>HomeScreen Component, Name is {props.name}</Text>
    </View>
  );
};

export default HomeScreen;
