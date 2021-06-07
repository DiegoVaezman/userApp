import React from "react"
import { 
    Text, 
    View, 
    Dimensions,
    StyleSheet, 
    TouchableHighlight 
    } from "react-native";

const { height, width } = Dimensions.get('window')


export default function Header(){
    return (
        <View style={styles.header}>
          <Text style={styles.text} >Hello Usuario!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "purple",
        height: height -730,
        paddingLeft: 20,
        justifyContent: "center"
    },
    text: {
        fontSize: 20
    }
  })
