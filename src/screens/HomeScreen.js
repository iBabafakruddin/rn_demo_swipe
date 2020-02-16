import React, { useContext, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Context as BooksContext } from "../context/BooksContext";
import Swipeable from "../components/Swipeable";

const HomeScreen = () => {
  const { state, getData, removeFromList, purchaseBook } = useContext(
    BooksContext
  );

  useEffect(() => {
    getData();
  }, []);

  const nextItem = currnetItem => {
    removeFromList(currnetItem);
  };

  const onRightSwipe = currnetItem => {
    purchaseBook(currnetItem);
    removeFromList(currnetItem);
  };

  const showBooks = () => {
    if (!state || !state.Books)
      return (
        <View>
          <Text>No Books Available</Text>
        </View>
      );
    return (
      <View>
        <Text>Home</Text>
        {state.Books.map(Book => {
          return (
            <Swipeable
              key={Book.id}
              onSwipeRight={onRightSwipe}
              onSwipeLeft={nextItem}
              item={Book}
              style={styles.book}
            >
              <Image
                source={require(`../../assets/${Book.image}`)}
                style={{ height: 400, width: 300 }}
              />
              <View style={{ marginTop: 0 }}>
                <Text>{Book.title}</Text>
                <Text>{Book.author}</Text>
              </View>
            </Swipeable>
          );
        })}
      </View>
    );
  };
  return showBooks();
};

const styles = StyleSheet.create({
  book: {
    flex: 1,
    alignItems: "center",
    height: 500,
    backgroundColor: "grey",
    marginTop: 4
  }
});

export default HomeScreen;
