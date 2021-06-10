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
    Pressable,
    TextInput
} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';


const { height, width } = Dimensions.get('window')


export default function ResponseUserModal(props) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.responseUserModalVisible}
            onRequestClose={() => {
                props.setResponseUserModalVisible(!props.responseUserModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {props.apiResponse.status == 200 ? 
                        <Text style={styles.modalText}>Success!</Text>
                    :
                        <View >
                            <Text style={styles.modalText}>Something was wrong</Text>
                            <Text>Status: {props.apiResponse.status}</Text>
                        </View>
                    }
                    <View style={styles.modalButtons}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {props.setResponseUserModalVisible(!props.responseUserModalVisible), props.setApiResponse({})}}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalView: {
        width:300,
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
        alignItems: "center",
        width: "100%"
    },
    button: {
        width: 80,
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
    },

    input: {
        flexDirection: "row"
    },
    textInput: {
        flex: 0.7,
        borderWidth: 2,
        fontSize: 20,
        margin: 20,
        padding: 5
    }
})
