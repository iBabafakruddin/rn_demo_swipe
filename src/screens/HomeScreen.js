import React, { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const altersData = {
    Action: [
      {
        id: 1,
        title: "Avengers The End Game",
        description: "The End Of Thanos"
      },
      {
        id: 2,
        title: "Action Jackson",
        description: "Hold Your Breath, Its full of action scenes"
      }
    ],
    INDIAN: [
      {
        id: 1,
        title: "OMG",
        description: "Searching The Divine Power"
      },
      {
        id: 2,
        title: "3 Idiots",
        description: "The Story of # Stuendents, Dreams or Marks ?"
      },
      {
        id: 3,
        title: "Bahubali",
        description: "Epic Battle of Brothres"
      }
    ]
  };
  const openSwipeScreen = data => {
    //goto navigate SwipeScreen
    navigation.navigate("SwipeScreen");
  };

  return (
    <View>
      <View styles={styles.header}>
        <Text styles={styles.headerText}>Suggestions Header</Text>
      </View>

      {Object.keys(altersData).map(category => {
        return (
          <View styles={styles.category} key={category}>
            <Text>{category}</Text>
            <Text onPress={() => openSwipeScreen(altersData[category])}>
              {altersData[category].length} Notifications
            </Text>
          </View>
        );
      })}

      <View styles={styles.alert}>
        <Text>Create Alert</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  headerText: {},
  alert: { marginTop: 100, alignItems: "center", marginBottom: 10 },
  category: {}
});

export default HomeScreen;
