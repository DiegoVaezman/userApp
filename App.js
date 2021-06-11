import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./components/mainPage";
import HomePage from "./components/homePage";

const { Navigator, Screen } = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="homePage" options={{ title: "User App", headerTitleAlign: 'center'}} component={HomePage} />
        <Screen name="mainPage" options={{ title: "Users List", headerTitleAlign: 'center'}} component={MainPage} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
})