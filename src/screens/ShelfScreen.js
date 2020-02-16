import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Data from "../data/Books";

const ShelfScreen = ({ navigation }) => {
  const { Books } = Data;

  const readBook = Book => {
    navigation.navigate("Read");
  };
  return (
    <ScrollView>
      <Text>ShelfScreen Component</Text>
      {Books.map(Book => {
        return (
          <TouchableOpacity
            key={Book.id}
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => readBook(Book)}
          >
            <Image
              source={require(`../../assets/${Book.image}`)}
              style={{ height: 150, width: 80, alignSelf: "flex-start" }}
            />
            <View style={{ alignSelf: "flex-end", marginTop: 0 }}>
              <Text>{Book.title}</Text>
              <Text>{Book.author}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ShelfScreen;
