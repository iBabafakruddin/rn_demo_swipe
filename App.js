import React from "react";
import { View, Text, Button } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.cnt = 0;
    this.state = { count: 0 };

    // This binding is necessary to make `this` work in the callback
    this.incrementCnt = this.incrementCnt.bind(this);
    this.incrementState = this.incrementState.bind(this);
  }

  incrementCnt() {
    this.cnt = this.cnt + 1;
    console.log(this.cnt);
  }

  incrementState() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    return (
      <View>
        <Text>Class Component, Name is {this.props.name}</Text>
        <Button
          title={`Count with cnt: ${this.cnt} +`}
          onPress={this.incrementCnt}
        />
        <Button
          title={`Count with State: ${this.state.count} +`}
          onPress={this.incrementState}
        />
      </View>
    );
  }
}

const App = () => {
  return (
    <View>
      <HomeScreen name="Admin" />
      <ClassComp name="Admin" />
    </View>
  );
};
export default App;
