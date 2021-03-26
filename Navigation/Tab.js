import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { Image, StyleSheet, Text } from "react-native";
import Recipe from "../Screens/Recipe.js";
import FavList from "../Screens/FavList.js";
import About from "../Screens/About.js";
import Filter from "../Screens/Filter.js";

const Tabs = createBottomTabNavigator();

export default function Tab() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/cutlery.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#2DC268" : "#CDCDD2",
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "#CDCDD2",
                fontSize: 10,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Home
            </Text>
          ),
        }}
        component={Home}
      />
      <Tabs.Screen
        name="FavList"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/like.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#2DC268" : "#CDCDD2",
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "#CDCDD2",
                fontSize: 10,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Favourite List
            </Text>
          ),
        }}
        component={FavList}
      />
      <Tabs.Screen
        name="User"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/user.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#2DC268" : "#CDCDD2",
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "black" : "#CDCDD2",
                fontSize: 10,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              About
            </Text>
          ),
        }}
        component={About}
      />
    </Tabs.Navigator>
  );
}
