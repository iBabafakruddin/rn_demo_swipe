import Expo from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, TabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";
import store from "./store";

//class App extends React.Component {
//  render() {
const MainNavigator = createBottomTabNavigator(
  {
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: createStackNavigator(
        {
          review: ReviewScreen,
          settings: SettingsScreen
        },
        { initialRouteName: "review" }
      )
    })
  },
  {
    navigationOptions: {
      tabBar: { visible: false },
      tabBarOptions: { showLabel: false }
    },
    lazyLoad: true
  }
);
MainNavigator.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBar: { visible: false }
};

//return MainNavigator;
/*return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );*/
//}
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 15
    //alignItems: "center",
    //justifyContent: "center"
  }
});
const AppContainer = createAppContainer(MainNavigator);
export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
