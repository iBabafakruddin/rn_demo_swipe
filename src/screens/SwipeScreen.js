import React, { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Swipeable from "../components/Swipeable";

const SwipeScreen = ({ navigation }) => {
  const [numRecords, setNumRecords] = useState(10);
  const [data, setData] = useState([]);
  useEffect(() => {
    const records = [];
    let startRecord = numRecords - 10;
    for (let i = startRecord; i < numRecords; i++) {
      const record = { id: i, text: `Record number ${i}` };
      records.push(record);
    }
    setData(records);
  }, [numRecords]);

  const loadMoreRecords = item => {
    const updatedData = data.filter(record => record.id !== item.id);
    if (updatedData.length === 0) {
      const nextRecordsCount = numRecords + 10;
      setNumRecords(nextRecordsCount);
    } else {
      setData(updatedData);
    }
  };
  const goHome = () => navigation.navigate("HomeScreen");
  return (
    <View>
      {data.map(record => {
        return (
          <Swipeable
            onSwipeLeft={loadMoreRecords}
            onSwipeRight={loadMoreRecords}
            item={record}
            style={styles.item}
          >
            <Text>{record.text}</Text>
          </Swipeable>
        );
      })}

      <Button title="Back" onPress={goHome} />
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
