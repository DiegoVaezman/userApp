import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable
} from "react-native";

export default function DeleteUserModal(props) {
  const appColor = props.appColor;
  const selectedUser = props.selectedUser;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.deleteUserModalVisible}
      onRequestClose={() => {
        props.setDeleteUserModalVisible(!props.deleteUserModalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Do you want to delete user {selectedUser.name}? </Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => props.setDeleteUserModalVisible(!props.deleteUserModalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, {backgroundColor: appColor}]}
              onPress={() => { props.setDeleteUserModalVisible(!props.deleteUserModalVisible), props.deleteUser(selectedUser) }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
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
    marginBottom: 40,
    fontWeight: "bold"
  }
});
