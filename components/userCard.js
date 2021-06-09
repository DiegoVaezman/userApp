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
import formatDate from "../services/formatDate"


const { height, width } = Dimensions.get('window')


export default function UserCard(props) {
    const selectedUser = props.selectedUser
    // console.log(selectedUser.userInfo.results[0].picture.medium)
    return (
        <View style={styles.card}>
            <View style={styles.cardBody}>
                {selectedUser.name == undefined ? 
                <View style={{ flex: 1 }}>
                    <Text style={styles.text} >Select one user.</Text>
                </View> 
                :
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 70, height: 70, resizeMode: 'contain' }} source={selectedUser.name == undefined ? require('../assets/GitHub_logo.png') : { uri: selectedUser.userInfo.results[0].picture.medium }} />
                        <View style={styles.cardBodyText}>
                            <Text style={styles.text} >{selectedUser.name != undefined && selectedUser.name}</Text>
                            <Text style={styles.text} >{selectedUser.name != undefined && `DOB: ${formatDate(selectedUser.birthdate)}`}</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text>E-mail: {selectedUser.userInfo.results[0].email}</Text>
                        <Text>Phone: {selectedUser.userInfo.results[0].phone}</Text>
                        <Text>City: {selectedUser.userInfo.results[0].location.city}, {selectedUser.userInfo.results[0].location.state}</Text>
                    </View>
                </View>
                }
                <TouchableHighlight style={{ height: 50 }} onPress={() => props.setSearchUserModalVisible(true)}>
                    <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/GitHub_logo.png')} />
                </TouchableHighlight>
            </View>
            <View style={styles.cardFunctions}>
                <View style={styles.cardFunctionsButton} >
                    <Button title="Modify" onPress={() => props.setModifyUserModalVisible(true)} disabled={selectedUser.name == undefined ? true : false} />
                </View>
                <View style={styles.cardFunctionsButton} >
                    <Button title="Delete" onPress={() => props.setDeleteUserModalVisible(true)} disabled={selectedUser.name == undefined ? true : false} />
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
        width: width - 160,
        paddingLeft: 20,
        justifyContent: "space-around"
    },
    text: {
        fontSize: 25
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
