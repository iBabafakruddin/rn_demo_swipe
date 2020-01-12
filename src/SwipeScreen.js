import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Swipeable from "../components/Swipeable";

const SwipeScreen = () => {
  return (
    <View>
      <Swipeable item={{ id: 1 }} style={styles.item}>
        <Text>Item 1</Text>
      </Swipeable>
      <Swipeable item={{ id: 2 }} style={styles.item}>
        <Text>Item 2</Text>
      </Swipeable>
      <Swipeable item={{ id: 3 }} style={styles.item}>
        <Text>Item 3</Text>
      </Swipeable>
      <Swipeable item={{ id: 4 }} style={styles.item}>
        <Text>Item 4</Text>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    height: 200,
    backgroundColor: "green"
  }
});

export default SwipeScreen;
