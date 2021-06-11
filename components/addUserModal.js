import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import formatDate from "../services/formatDate";
import {
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableHighlight,
    Modal,
    Pressable,
    TextInput
} from "react-native";


export default function AddUserModal(props) {

    const appColor = props.appColor;

    const [form, setForm] = useState({
        name: "",
        birthdate: ""
    });
    const [show, setShow] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'ios');
        setForm({...form, birthdate: currentDate});
    };
    const onChangeText = (text) => {
        setForm({...form, name: text});
    };
    const resetForm = () => {
        setForm({ name: "", birthdate: "" });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.addUserModalVisible}
            onRequestClose={() => {
                props.setAddUserModalVisible(!props.addUserModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Add new user</Text>
                    <Text style={styles.modalText}>Please, enter name and birthdate.</Text>

                    <View style={styles.input}>
                        <TextInput style={styles.textInput} placeholder="Name" value={form.name} onChangeText={onChangeText}/>
                    </View>
                    <TouchableHighlight style={styles.input} onPress={() => setShow(true)} underlayColor={appColor} activeOpacity={1}>
                        <Text style={styles.textInput} > {form.birthdate == "" || form.birthdate == undefined ? "Birthdate" : formatDate(form.birthdate)}</Text>
                    </TouchableHighlight>
                    <View style={styles.input}>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onChangeDate}
                                maximumDate={new Date()}
                            />
                        )}
                    </View>
                <View style={styles.modalButtons}>
                    <Pressable
                        style={[styles.button, styles.buttonCancel]}
                        onPress={() => {props.setAddUserModalVisible(!props.addUserModalVisible), resetForm()}}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, {backgroundColor: appColor}]}
                        onPress={() => {props.setAddUserModalVisible(!props.addUserModalVisible), resetForm(), props.addNewUser(form)}}
                        disabled={form.name == "" || form.birthdate == "" || form.birthdate == undefined ? true : false}
                    >
                        <Text style={styles.textStyle}>Add user</Text>
                    </Pressable>
                </View>
                </View>
            </View>
        </Modal >
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
        width:80,
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
    modalTitle: {
        fontSize:30,
        textAlign: "center",
        fontWeight: "bold"
    },
    modalText: {
        fontSize:20,
        marginBottom: 15,
        textAlign: "center"
    },

    input: {
        flexDirection: "row",
        marginBottom: 10
    },
    textInput: {
        flex: 0.7,
        borderWidth: 2,
        fontSize: 20,
        margin: 20,
        padding: 5
    }
});
