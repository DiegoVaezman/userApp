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
    FlatList
} from "react-native"



const { height, width } = Dimensions.get('window')


export default function UserCard(props) {
    const selectedUser = props.selectedUser
    return (
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={require('../assets/GitHub_logo.png')} />
                <View style={styles.cardBodyText}>
                    <Text style={styles.text} >Name: {selectedUser.name}</Text>
                    <Text style={styles.text} >Birthdate: {selectedUser.lastName}</Text>
                </View>
                <TouchableHighlight style={{height:50}} onPress={() => props.setSearchUserModalVisible(true)}>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/GitHub_logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={styles.cardFunctions}>
                <View style={styles.cardFunctionsButton} >
                    <Button title="Modify" onPress={() => props.setModifyUserModalVisible(true)} disabled={props.selectedUser.name == "Select one user" ? true : false} />
                </View>
                <View style={styles.cardFunctionsButton} >
                    <Button title="Delete" onPress={() => props.setDeleteUserModalVisible(true)} disabled={props.selectedUser.name == "Select one user" ? true : false} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "blue",
        margin: 10,
        padding: 10,
        height: height - 600,
        justifyContent: "space-between"
    },
    cardBody: {
        flexDirection: "row"
    },
    cardBodyText: {
        width: width - 190,
        paddingLeft: 20,
        justifyContent: "space-around"
    },
    searchImage: {

    },
    cardFunctions: {
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "space-between",
        width: width - 250
    },
    cardFunctionsButton: {
        width: width - 340,

    }
})
