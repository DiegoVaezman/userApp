import React, { useEffect, useState } from "react"
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  Modal,
  Pressable
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import MainPage from "./components/mainPage"
import HomePage from "./components/homePage"


const { height, width } = Dimensions.get('window')
// let localColor:String;

const { Navigator, Screen } = createStackNavigator();



export default function App() {
  console.log("hola pepa")


  
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="homePage" options={{ title: "User App"}} component={HomePage} />
        <Screen name="mainPage" options={{ title: "Users List"}} component={MainPage} />
      </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})