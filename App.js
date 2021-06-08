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
  page: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 0,
    paddingBottom: 20,
    flex: 1
  },
  // text: {
  //   fontSize: 10,
  //   textAlign: "center"
  // },
  // buttons: {
  //   justifyContent: "space-between",
  //   height: height -680,
  //   width: width - 200
  // },
  // links: {
  //   alignItems:"center"
  // }

  page1: {
    paddingTop: 25,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20
  },
  list: {
    height: height - 420,
    margin: 10,
    marginTop: 0,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "blue"
  },
  button: {
    width: width - 200,
    alignSelf: "center"
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonCancel: {
    marginRight: "auto"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})