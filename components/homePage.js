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
// let localColor:String;





export default function HomePage({ navigation}) {


    const [appColor, setAppColor] = useState("blue")

  const RandomGenerate = () => {
    return Math.floor( Math.random() * 255).toString(16);
  }
  const colorHex = () => {
    localColor = "#" + RandomGenerate() + RandomGenerate() + RandomGenerate();
    setAppColor(`${localColor}`)
  }

  const press = () => {
    Alert.alert(`has clikado en sign in`)
  }
  return (
    <View style={styles.page} >
      <TouchableHighlight onPress={() => colorHex()}>
        <Image source={require('../assets/userapp_logo.jpg')} />
      </TouchableHighlight>
      <View style={styles.buttons}>
        <Button color={appColor} title="Sign in" onPress={() => { navigation.navigate("mainPage", { color: appColor})}} />
        <Button color={appColor} title="Signup" onPress={press} />
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between", width: width - 150}}>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('../assets/GitHub_logo.png')} />
          <Text style={styles.text}>GitHub</Text>
        </View>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('../assets/portfolio_logo.png')} />
          <Text style={styles.text}>Portfolio</Text>
        </View>
        <View style={styles.links}>
          <Image style={{width:50, height:50, resizeMode: 'contain'}} source={require('../assets/linkedin_logo.png')} />
          <Text style={styles.text}>Linkedin</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 130,
    paddingBottom: 20,
    flex: 1
  },
  text: {
    fontSize: 10,
    textAlign: "center"
  },
  buttons: {
    justifyContent: "space-between",
    height: height -680,
    width: width - 200
  },
  links: {
    alignItems:"center"
  }

})