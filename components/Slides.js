import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}> {slide.text} </Text>
          {this.onCompleteButton(i)}
        </View>
      );
    });
  }

  onCompleteButton(i) {
    if (i === this.props.data.length - 1)
      return (
        <Button
          title="Start"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideText: {
    fontSize: 30,
    color: "white"
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: "#0288D1",
    marginTop: 15
  }
};
