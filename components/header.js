import React from "react"
import { 
    Text, 
    View, 
    Dimensions,
    StyleSheet, 
    TouchableHighlight,
    Image
    } from "react-native";

const { height, width } = Dimensions.get('window')


export default function Header(){
    return (
        <View style={styles.header}>
          <Text style={styles.text} >Hello Usuario!</Text>
          <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/GitHub_logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "purple",
        height: height -730,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 20
    }
  })
