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
import UserCard from "./userCard"
import AddUserModal from "./addUserModal"
import ModifyUserModal from "./modifyUserModal"
import DeleteUserModal from "./deleteUserModal"
import SearchUserModal from "./searchUserModal"
import ResponseUserModal from "./responseUserModal"

import { getData } from "../services/getData"
import { deleteData } from "../services/deleteUser"
import { postData } from "../services/postUser"
import { putData } from "../services/putUser"




const { height, width } = Dimensions.get('window')



export default function MainPage({ route }) {

    const localColor = route.params.color;

    const { data, setData, getUsers } = getData();
    useEffect(() => {
        getUsersList()
    }, []);

    const { deleteUserId } = deleteData();
    const { postUser } = postData();
    const { putUser } = putData();

    const [selectedUser, setSelectedUser] = useState({})
    const [addUserModalVisible, setAddUserModalVisible] = useState(false);
    const [modifyUserModalVisible, setModifyUserModalVisible] = useState(false);
    const [deleteUserModalVisible, setDeleteUserModalVisible] = useState(false);
    const [searchUserModalVisible, setSearchUserModalVisible] = useState(false);
    const [responseUserModalVisible, setResponseUserModalVisible] = useState(false);

    const [ apiResponse, setApiResponse ] = useState({})

    const [filteredData, setFilteredData ] = useState([])

    

    const showUser = (user) => {
        setSelectedUser(user)
    }

    const getUsersList = async (users) => {
        const response = JSON.parse(await getUsers());
        console.log(response.status)
        if (response.status != 200) {
            setApiResponse({status: response.status})
            setResponseUserModalVisible(true);
        }
    }
    const addNewUser = async (newUser) => {
        console.log("se añade usuario:", newUser.name, newUser.date)
        const response = JSON.parse(await postUser(newUser));
        console.log(response.status)
        setApiResponse({status: response.status})
        setResponseUserModalVisible(true);
        setData({});
        getUsersList();
    }

    const modifyUser = async (modifiedUser) => {
        if (modifiedUser.name == "") {
            modifiedUser.name = selectedUser.name
        }
        if (modifiedUser.birthdate == "") {
            modifiedUser.birthdate = selectedUser.birthdate
        }
        console.log("se modifica usuario ", selectedUser.name, "por", modifiedUser.name, "y", modifiedUser.birthdate)
        modifiedUser.id = selectedUser.id
        const response = JSON.parse(await putUser(modifiedUser));
        setApiResponse({status: response.status})
        setResponseUserModalVisible(true);
        setSelectedUser({});
        setData({});
        getUsersList();
    }

    const deleteUser = async (user) => {
        console.log("se elimina usuario: ", selectedUser.name)
        const response = JSON.parse(await deleteUserId(user));
        setApiResponse({status: response.status})
        setResponseUserModalVisible(true);
        setSelectedUser({});
        setData({});
        getUsersList();
    }

    const searchUser = (searchUser) => {
        console.log("se busca a usuario: ", searchUser.name)
        const newArray = data.filter(user => user.name.toLowerCase().includes(searchUser.name.toLowerCase()))
        setFilteredData(newArray)
    }

    console.log(data)
    return (
        <View style={styles.page1}>
            <UserCard selectedUser={selectedUser} setModifyUserModalVisible={setModifyUserModalVisible} setDeleteUserModalVisible={setDeleteUserModalVisible} setSearchUserModalVisible={setSearchUserModalVisible} />
            <TouchableHighlight style={styles.refreshList} onPress={() => setFilteredData([])}>
                <Image style={{ width: 30, height: 30}} source={require('../assets/refresh_img.png')} />
            </TouchableHighlight>
            <View style={styles.list}>
                {data.length ?
                    <FlatList
                        data={filteredData.length ? filteredData : data}
                        renderItem={({ item }) => {
                            return (
                                <ListItem user={item} onPress={showUser} localColor={localColor} />
                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                    :
                    <Text>Loading...</Text>
                }
            </View>
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
            <ResponseUserModal
                setResponseUserModalVisible={setResponseUserModalVisible}
                responseUserModalVisible={responseUserModalVisible}
                setApiResponse={setApiResponse}
                apiResponse={apiResponse}
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
        width: width-20,
        alignSelf: "center"
    },
    refreshList: { 
        width: 30, 
        height: 30, 
        resizeMode: 'contain', 
        marginLeft: 10 
    }
})