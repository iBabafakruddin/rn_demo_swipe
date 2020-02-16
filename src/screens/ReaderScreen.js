import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BooksContext } from "../context/BooksContext";

const ReaderScreen = ({ navigation }) => {
  const { state } = useContext(BooksContext);

  if (!state || !state.CurrentBook) return null;

  return (
    <View>
      <Text style={styles.screen}>ReaderScreen</Text>
      <Text style={styles.title}>{state.CurrentBook.title}</Text>
      <Text>{state.CurrentBook.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "stretch",
    backgroundColor: "grey",
    color: "#ffff"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "blue"
  },
  content: {
    fontSize: 14,

    marginTop: 10,
    marginBottom: 5
  }
});
export default ReaderScreen;
