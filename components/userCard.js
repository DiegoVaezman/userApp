import React from "react";
import {
    Text,
    View,
    Button,
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";
import formatDate from "../services/formatDate";

const { height, width } = Dimensions.get('window');


export default function UserCard(props) {
    const selectedUser = props.selectedUser;
    const appColor = props.appColor;

    return (
        <View style={[styles.card, { borderColor: appColor }]}>
            <View style={styles.cardBody}>
                <View style={{ flexDirection: "row" }}>
                    {selectedUser.id == undefined ?
                        <View style={{ flex: 1}}>
                            <Text style={styles.text} >Select one user.</Text>
                        </View>
                    :
                        <View style={{ flexDirection: "row", flex:1 }}>
                            <Image style={{ width: 90, height: 90, resizeMode: 'contain', borderRadius: 90 / 2 }} source={selectedUser.id == undefined ? require('../assets/GitHub_logo.png') : { uri: selectedUser.userInfo.results[0].picture.medium }} />
                            <View style={styles.cardBodyText}>
                                <Text style={styles.text} >{selectedUser.id != undefined && selectedUser.name}</Text>
                                <Text style={styles.text} >{selectedUser.id != undefined && formatDate(selectedUser.birthdate)}</Text>
                            </View>
                        </View>
                    }
                    <TouchableHighlight style={{ height: 50 }} onPress={() => props.setSearchUserModalVisible(true)} underlayColor={appColor} activeOpacity={1}>
                        <Image style={{ width: 40, height: 40, resizeMode: 'contain' }} source={require('../assets/searchUser_img.png')} />
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: "row", flex:1 }}>
                    {selectedUser.id != undefined &&
                        <View style={{ marginTop: 10, flex:1}}>
                            <Text>{selectedUser.userInfo.results[0].email}</Text>
                            <Text>Phone: {selectedUser.userInfo.results[0].phone}</Text>
                            <Text>City: {selectedUser.userInfo.results[0].location.city}, {selectedUser.userInfo.results[0].location.state}</Text>
                        </View>
                    }
                    <View style={styles.cardFunctions}>
                        <View style={styles.cardFunctionsButton} >
                            <Button color={appColor} title="Modify" onPress={() => props.setModifyUserModalVisible(true)} disabled={selectedUser.id == undefined ? true : false} />
                        </View>
                        <View style={styles.cardFunctionsButton} >
                            <Button color={appColor} title="Delete" onPress={() => props.setDeleteUserModalVisible(true)} disabled={selectedUser.id == undefined ? true : false} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        height: height - 600,
        justifyContent: "space-between",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cardBody: {
        flex:1,
        flexDirection: "column",
        justifyContent: "space-around"
    },
    cardBodyText: {
        width: width - 165,
        paddingLeft: 10,
        justifyContent: "space-around"
    },
    text: {
        fontSize: 25
    },
    cardFunctions: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: width - 250
    },
    cardFunctionsButton: {
        width: width - 340,
    }
});
