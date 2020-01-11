import React, { Component } from "react";
import { View, Text } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to job App", color: "#03A9F4" },
  { text: "Get  the job from this App", color: "#009688" },
  { text: "Set your location and swipte right", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("map");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}
