import React, { useContext, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Context as BooksContext } from "../context/BooksContext";

const ShelfScreen = ({ navigation }) => {
  const { state, getData, setCurrentBook } = useContext(BooksContext);

  const readBook = Book => {
    setCurrentBook(Book);
    navigation.navigate("Read");
  };

  useEffect(() => {
    getData();
  }, []);

  const showBooks = () => {
    if (!state || !state.Books)
      return (
        <View>
          <Text>No Books Available</Text>
        </View>
      );
    return (
      <ScrollView>
        <Text>ShelfScreen Component</Text>
        {state.Books.map(Book => {
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
  return showBooks();
};

export default ShelfScreen;
