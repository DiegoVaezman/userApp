import React, { useEffect, useState } from "react";
import {
    View,
    Button,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight,
    FlatList,
    ActivityIndicator
} from "react-native";

import ListItem from "./listItem";
import UserCard from "./userCard";
import AddUserModal from "./addUserModal";
import ModifyUserModal from "./modifyUserModal";
import DeleteUserModal from "./deleteUserModal";
import SearchUserModal from "./searchUserModal";
import ResponseUserModal from "./responseUserModal";

import { getData } from "../services/getData";
import { deleteData } from "../services/deleteUser";
import { postData } from "../services/postUser";
import { putData } from "../services/putUser";
import { exampleData } from "../services/getExampleData";

const { height, width } = Dimensions.get('window');


export default function MainPage({ route }) {
    const appColor = route.params.color;

    const { data, setData, getUsers, loading } = getData();
    useEffect(() => {
        getUsersList();
    }, []);

    const { deleteUserId } = deleteData();
    const { postUser } = postData();
    const { putUser } = putData();
    const { getExampleUsers } = exampleData();

    const [addUserModalVisible, setAddUserModalVisible] = useState(false);
    const [modifyUserModalVisible, setModifyUserModalVisible] = useState(false);
    const [deleteUserModalVisible, setDeleteUserModalVisible] = useState(false);
    const [searchUserModalVisible, setSearchUserModalVisible] = useState(false);
    const [responseUserModalVisible, setResponseUserModalVisible] = useState(false);

    const [selectedUser, setSelectedUser] = useState({});

    const [apiResponse, setApiResponse] = useState({});

    const [filteredData, setFilteredData] = useState([]);


    const showUser = (user) => {
        setSelectedUser(user);
    };

    const getUsersList = async (users) => {
        const response = JSON.parse(await getUsers());
        if (response.status != 200) {
            setApiResponse({ status: response.status })
            setResponseUserModalVisible(true);
            const exampleList = await getExampleUsers();
            setData(exampleList);
        };
    };
    const addNewUser = async (newUser) => {
        const response = JSON.parse(await postUser(newUser));
        setApiResponse({ status: response.status });
        setResponseUserModalVisible(true);
        setData({});
        getUsersList();
    };

    const modifyUser = async (modifiedUser) => {
        if (modifiedUser.name == "") {
            modifiedUser.name = selectedUser.name;
        };
        if (modifiedUser.birthdate == "") {
            modifiedUser.birthdate = selectedUser.birthdate;
        };
        modifiedUser.id = selectedUser.id;
        const response = JSON.parse(await putUser(modifiedUser));
        setApiResponse({ status: response.status });
        setResponseUserModalVisible(true);
        setSelectedUser({});
        setData({});
        getUsersList();
    };

    const deleteUser = async (user) => {
        const response = JSON.parse(await deleteUserId(user));
        setApiResponse({ status: response.status });
        setResponseUserModalVisible(true);
        setSelectedUser({});
        setData({});
        getUsersList();
    };

    const searchUser = (searchUser) => {
        const newArray = data.filter(user => user.name.toLowerCase().includes(searchUser.name.toLowerCase()));
        setFilteredData(newArray);
        if(!newArray.length) {
        setApiResponse({status: "There is not user with this name"});
        setResponseUserModalVisible(true);
        }
    };

    return (
        <View style={[styles.page, { backgroundColor: `${appColor}26` }]}>
            <UserCard
                appColor={appColor}
                selectedUser={selectedUser}
                setModifyUserModalVisible={setModifyUserModalVisible}
                setDeleteUserModalVisible={setDeleteUserModalVisible}
                setSearchUserModalVisible={setSearchUserModalVisible}
            />
            <TouchableHighlight style={styles.refreshList} onPress={() => setFilteredData([])} underlayColor={appColor} activeOpacity={1} >
                <Image style={{ width: 30, height: 30 }} source={require('../assets/refresh_img.png')} />
            </TouchableHighlight>
            <View style={[styles.list, { borderColor: appColor, backgroundColor: `${appColor}40` }]}>
                {loading ?
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                :
                    <FlatList
                        data={filteredData.length ? filteredData : data}
                        renderItem={({ item }) => {
                            return (
                                <ListItem user={item} onPress={showUser} appColor={appColor} />
                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                }
            </View>
            <View style={styles.button} >
                <Button color={appColor} title="Add new User" onPress={() => setAddUserModalVisible(true)} />
            </View>


            <AddUserModal
                setAddUserModalVisible={setAddUserModalVisible}
                addUserModalVisible={addUserModalVisible}
                addNewUser={addNewUser}
                appColor={appColor}
            />
            <ModifyUserModal
                setModifyUserModalVisible={setModifyUserModalVisible}
                modifyUserModalVisible={modifyUserModalVisible}
                selectedUser={selectedUser}
                modifyUser={modifyUser}
                appColor={appColor}
            />
            <DeleteUserModal
                setDeleteUserModalVisible={setDeleteUserModalVisible}
                deleteUserModalVisible={deleteUserModalVisible}
                selectedUser={selectedUser}
                deleteUser={deleteUser}
                appColor={appColor}
            />
            <SearchUserModal
                setSearchUserModalVisible={setSearchUserModalVisible}
                searchUserModalVisible={searchUserModalVisible}
                searchUser={searchUser}
                appColor={appColor}
            />
            <ResponseUserModal
                setResponseUserModalVisible={setResponseUserModalVisible}
                responseUserModalVisible={responseUserModalVisible}
                setApiResponse={setApiResponse}
                apiResponse={apiResponse}
                appColor={appColor}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        paddingTop: 25,
        paddingBottom: 20,
    },
    list: {
        height: height - 420,
        margin: 10,
        marginTop: 0,
        marginBottom: 20,
        borderWidth: 1,
    },
    button: {
        width: width - 20,
        alignSelf: "center"
    },
    refreshList: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft: 10
    }
});