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


export default function ModifyUserModal(props) {

    const selectedUser = props.selectedUser

    const [form, setForm] = useState({
        name: "",
        birthdate: ""
    });
    
    const [ShowDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDatePicker(Platform.OS === 'ios');
        setForm({ ...form, birthdate: currentDate });
    };
    const onChangeText = (text) => {
        console.log(text)
        setForm({ ...form, name: text })
    }
    const resetForm = () => {
        console.log(form)
        console.log("Se resetea form")
        setForm({ name: "", birthdate: "" })
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modifyUserModalVisible}
            onRequestClose={() => {
                props.setModifyUserModalVisible(!props.modifyUserModalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Modify user</Text>
                    <Text style={styles.modalText}>Please, enter new data for the user: {selectedUser.name}</Text>

                    <View style={styles.input}>
                        <TextInput style={styles.textInput} placeholder="Name" value={form.name} onChangeText={onChangeText} />
                    </View>
                    <TouchableHighlight style={styles.input} onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.textInput} > {form.birthdate == "" || form.birthdate == undefined ? "Birthdate" : form.birthdate.toDateString()}</Text>
                    </TouchableHighlight>
                    <View style={styles.input}>
                        {ShowDatePicker && (
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
                            onPress={() => { props.setModifyUserModalVisible(!props.modifyUserModalVisible), resetForm()}}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => { props.setModifyUserModalVisible(!props.modifyUserModalVisible), resetForm(), props.modifyUser(form) }}
                            disabled={form.name == "" && form.birthdate == "" || undefined ? true : false}
                        >
                            <Text style={styles.textStyle}>Modify user</Text>
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
        width:100,
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
})
