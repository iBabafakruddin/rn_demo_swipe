import React, { Component } from "react";
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  Text,
  LayoutAnimation,
  UIManager
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPTE_THRESHOLD = SCREEN_WIDTH * 0.25;

const Swipeable = ({ onSwipeLeft, onSwipeRight, item, children, style }) => {
  const position = new Animated.ValueXY();

  const forceSwipe = direction => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = direction => {
    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    //position.setValue({ x: 0, y: 0 });
    //this.setState({ index: this.state.index + 1 });
  };

  const resetPosition = () => {
    Animated.spring(position, { toValue: { x: 0, y: 0 } }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPTE_THRESHOLD) {
        forceSwipe("right");
      } else if (gesture.dx < -SWIPTE_THRESHOLD) {
        forceSwipe("left");
      } else {
        resetPosition();
      }
    }
  });

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 2, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"]
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  return (
    <Animated.View
      key={item.id}
      style={[getCardStyle(), style, styles.cardStyle]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

Swipeable.defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {}
};

const styles = {
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH
  }
};

export default Swipeable;
