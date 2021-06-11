import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from "react-native";

export default function UsersList({ user, onPress = (f) => f, appColor }) {

    return (
        <TouchableHighlight onPress={() => onPress(user)} underlayColor={appColor} activeOpacity={1}>
            <View style={[styles.itemList, { borderBottomColor: appColor, borderRightColor: appColor }]}>
                <View style={[styles.circleDot, { backgroundColor: appColor }]} />
                <Text style={styles.text}>{user.name}</Text>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    itemList: {
        padding: 5,
        margin: 5,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
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
    circleDot: {
        marginLeft: 10,
        marginRight: 10,
        width: 10,
        height: 10,
        borderRadius: 20
    },
    text: {
        fontSize: 20
    }
});