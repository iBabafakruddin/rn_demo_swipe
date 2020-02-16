import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Data from "../data/Books";

const ReaderScreen = ({ navigation }) => {
  const { Books } = Data;
  const [book, setBook] = useState(Books[0]);
  return (
    <View>
      <Text>ReaderScreen Component</Text>
      <Text>{book.title}</Text>
      <Text>{book.description}</Text>
      <Button
        title="Next"
        onPress={() => {
          setBook(Books[book.id]);
        }}
      />
    </View>
  );
};

export default ReaderScreen;
