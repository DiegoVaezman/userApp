import React, { useEffect, useState }from "react"
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
  FlatList
  } from "react-native"
import ListItem from "./components/listItem"
import usersData from "./data/users.json"
import Header from "./components/header"
import UserCard from "./components/userCard"

const { height, width } = Dimensions.get('window')
// let localColor:String;





export default function App() {
  console.log("hola pepa")

  const [selectedUser, setSelectedUser] = useState({
    name: "Select one user", 
    lastName: ""
  })

  function show(user) {
    setSelectedUser({name: user.name, lastName: user.lastName})
  }

  // const [appColor, setAppColor] = useState("")

  // const RandomGenerate = ():String => {
  //   return Math.floor( Math.random() * 255).toString(16);
  // }
  // const colorHex = () => {
  //   localColor = "#" + RandomGenerate() + RandomGenerate() + RandomGenerate();
  //   setAppColor(`${localColor}`)
  // }

  // const press = () => {
  //   Alert.alert(`has clikado en sign in`)
  // }
  return (
    <View style={styles.page} >
      {/* <TouchableHighlight onPress={() => colorHex()}>
        <Image source={require('./assets/userapp_logo.jpg')} />
      </TouchableHighlight>
      <View style={styles.buttons}>
        <Button color={appColor} title="Sign in" onPress={press} />
        <Button color={appColor} title="Signup" onPress={press} />
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", width: width - 150}}>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('./assets/GitHub_logo.png')} />
          <Text style={styles.text}>GitHub</Text>
        </View>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('./assets/portfolio_logo.png')} />
          <Text style={styles.text}>Portfolio</Text>
        </View>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('./assets/linkedin_logo.png')} />
          <Text style={styles.text}>Linkedin</Text>
        </View>
      </View> */}

      <View style={styles.page1}>
        <Header />
        <UserCard selectedUser={selectedUser} />
        <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10 }} source={require('./assets/GitHub_logo.png')} />
        <FlatList style={styles.list}
          data={usersData}
          renderItem={ ({item}) => {
            return (
              <ListItem key={item.id} user={item} onPress={show} />
            );
          }}
        />
        <View style={styles.button} >
          <Button title="Add new User" />
        </View>
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  // page: {
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   paddingTop: 130,
  //   paddingBottom: 20,
  //   flex: 1
  // },
  // text: {
  //   fontSize: 10,
  //   textAlign: "center"
  // },
  // buttons: {
  //   justifyContent: "space-between",
  //   height: height -680,
  //   width: width - 200
  // },
  // links: {
  //   alignItems:"center"
  // }

  page1: {
    paddingTop: 25,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20
  },
  list: {
    height: height -420,
    margin: 10,
    marginTop: 0,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "blue"
  },
  button: {
    width: width - 200,
    alignSelf: "center"
  }
})