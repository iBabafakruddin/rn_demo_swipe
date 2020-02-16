import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Data from "../data/Books";

const ShelfScreen = () => {
  const { Books } = Data;
  return (
    <ScrollView>
      <Text>ShelfScreen Component</Text>
      {Books.map(Book => {
        return (
          <View key={Book.id} style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require(`../../assets/${Book.image}`)}
              style={{ height: 150, width: 80, alignSelf: "flex-start" }}
            />
            <View style={{ alignSelf: "flex-end", marginTop: 0 }}>
              <Text>{Book.title}</Text>
              <Text>{Book.author}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ShelfScreen;
