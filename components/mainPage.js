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
import ListItem from "./listItem"
import usersData from "../data/users.json"
import Header from "./header"
import UserCard from "./userCard"
import AddUserModal from "./addUserModal"
import ModifyUserModal from "./modifyUserModal"
import DeleteUserModal from "./deleteUserModal"
import SearchUserModal from "./searchUserModal"

const { height, width } = Dimensions.get('window')



export default function MainPage({ route }) {

    const localColor = route.params.color;

    const [selectedUser, setSelectedUser] = useState({
        name: "Select one user",
        lastName: ""
    })

    const [addUserModalVisible, setAddUserModalVisible] = useState(false);
    const [modifyUserModalVisible, setModifyUserModalVisible] = useState(false);
    const [deleteUserModalVisible, setDeleteUserModalVisible] = useState(false);
    const [searchUserModalVisible, setSearchUserModalVisible] = useState(false);

    function show(user) {
        setSelectedUser({ name: user.name, lastName: user.lastName })
    }

    const addNewUser = (newUser) => {
        console.log("se añade usuario:", newUser.name, newUser.date)
    }

    const modifyUser = (modifiedUser) => {
        console.log("se modifica usuario ", selectedUser.name, "por", modifiedUser.name, "y", modifiedUser.date)
    }

    const deleteUser = () => {
        console.log("se elimina usuario: ", selectedUser.name)
    }

    const searchUser = (searchUser) => {
        console.log("se busca a usuario: ", searchUser.name)
    }

    return (
        <View style={styles.page1}>
            <Header />
            <UserCard selectedUser={selectedUser} setModifyUserModalVisible={setModifyUserModalVisible} setDeleteUserModalVisible={setDeleteUserModalVisible} setSearchUserModalVisible={setSearchUserModalVisible} />
            <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10 }} source={require('../assets/GitHub_logo.png')} />
            <FlatList style={styles.list}
                data={usersData}
                renderItem={({ item }) => {
                    return (
                        <ListItem key={item.id} user={item} onPress={show} localColor={localColor} />
                    );
                }}
            />
            <View style={styles.button} >
                <Button title="Add new User" onPress={() => setAddUserModalVisible(true)} />
            </View>


            <AddUserModal
                setAddUserModalVisible={setAddUserModalVisible}
                addUserModalVisible={addUserModalVisible}
                addNewUser={addNewUser}
            />
            <ModifyUserModal
                setModifyUserModalVisible={setModifyUserModalVisible}
                modifyUserModalVisible={modifyUserModalVisible}
                selectedUser={selectedUser}
                modifyUser={modifyUser}
            />
            <DeleteUserModal
                setDeleteUserModalVisible={setDeleteUserModalVisible}
                deleteUserModalVisible={deleteUserModalVisible}
                selectedUser={selectedUser}
                deleteUser={deleteUser}
            />
            <SearchUserModal
                setSearchUserModalVisible={setSearchUserModalVisible}
                searchUserModalVisible={searchUserModalVisible}
                searchUser={searchUser}
            />

        </View>

    )
}

const styles = StyleSheet.create({
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