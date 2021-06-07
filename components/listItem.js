import React, { useState }from "react"
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
    TouchableHighlight 
    } from "react-native";

export default function UsersList({user, onPress = (f) => f}){
    return (
        <TouchableHighlight onPress={() => onPress(user)}>
            <View style={styles.itemList}>
                <View style={styles.circleDot}/>
                <Text style={styles.text}>{user.name}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    itemList: {
        padding:5,
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    circleDot: {
        marginLeft: 10,
        marginRight: 10,
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "blue"
    },
    text: {
        fontSize: 20
    }
  })