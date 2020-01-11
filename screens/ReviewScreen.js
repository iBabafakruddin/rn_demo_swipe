import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";

export default class ReviewScreen extends Component {
  static navigationOptions = {
    title: "Review Jobs",
    header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="Settings"
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
            onPress={() => {
              navigate("settings");
            }}
          />
        ),
        style: {
          marginTop: Platform.OS === "android" ? 25 : 0
        }
      };
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}
