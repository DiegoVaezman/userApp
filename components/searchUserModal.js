import React, { useState } from "react";
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    Modal,
    Pressable,
    TextInput
} from "react-native";


export default function SearchUserModal(props) {
    const appColor = props.appColor;

    const [form, setForm] = useState({
        name: ""
    });

    const onChangeText = (text) => {
        setForm({ ...form, name: text });
    };

    const resetForm = () => {
        setForm({ name: ""});
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.searchUserModalVisible}
            onRequestClose={() => {
                props.setSearchUserModalVisible(!props.searchUserModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Search user by name</Text>

                    <View style={styles.input}>
                        <TextInput style={styles.textInput} placeholder="Name" value={form.name} onChangeText={onChangeText} />
                    </View>

                    <View style={styles.modalButtons}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => {props.setSearchUserModalVisible(!props.searchUserModalVisible), resetForm()}}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, {backgroundColor: appColor}]}
                            onPress={() => {props.setSearchUserModalVisible(!props.searchUserModalVisible), resetForm(), props.searchUser(form)}}
                        >
                            <Text style={styles.textStyle}>Search</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
        width: 80,
        borderRadius: 20,
        padding: 10,
        elevation: 2
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
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold"
    },

    input: {
        flexDirection: "row",
        marginBottom: 20
    },
    textInput: {
        flex: 0.7,
        borderWidth: 2,
        fontSize: 20,
        margin: 20,
        padding: 5
    }
});
