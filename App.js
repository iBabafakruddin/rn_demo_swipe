import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChatScreen from "./src/screens/ChatScreen";

const HomeNav = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  SwipeScreen: { screen: SwipeScreen }
});
const bottomTabBar = createBottomTabNavigator(
  {
    Home: { screen: HomeNav },
    Chat: { screen: ChatScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = focused ? "gesture-swipe-horizontal" : "shopping-bag";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Profile") {
          iconName = focused ? "ios-list-box" : "ios-list";
        } else if (routeName === "Chat") {
          iconName = focused ? "chat" : "chat-bubble-outline";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(bottomTabBar);
