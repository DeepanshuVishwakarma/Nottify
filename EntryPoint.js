import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider, useSelector } from "react-redux";
import store from "./src/store/store";
import Slides from "./src/components/slides/slides";
import Intro from "./src/components/Intro";
import Home from "./src/components/home/Home";
import Screen from "./src/components/screen/screen";

const Stack = createStackNavigator();

export default function EntryPoint() {
  const slide = useSelector((state) => state.app.slide);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Slides" component={Slides} />
        {/* <Stack.Screen name="Home" component={Home} />{" "} */}
        {/* Add the Home screen */}
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
