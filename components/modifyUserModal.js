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


const { height, width } = Dimensions.get('window')


export default function ModifyUserModal(props){
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
              <Text style={styles.modalText}>Please, enter new data for the user: {props.selectedUser.name}</Text>


              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => props.setModifyUserModalVisible(!props.modifyUserModalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => props.setModifyUserModalVisible(!props.modifyUserModalVisible)}
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
