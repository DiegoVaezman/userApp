import React from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { colorTheme } from "../services/colorTheme";

const { height, width } = Dimensions.get('window');

export default function HomePage({ navigation }) {
  const { appColor, colorHex } = colorTheme();
  return (
    <View style={[styles.page, {backgroundColor: `${appColor}26`}]} >
      <View style={styles.logo}>
        <TouchableHighlight style={styles.logoImg} onPress={() => colorHex()} underlayColor={appColor} activeOpacity={1}>
          <Image style={{ width: 180, height: 180, resizeMode: 'contain' }}  source={require('../assets/userapp_logo.png')} />
        </TouchableHighlight>
        <Text>Choose your app color theme tapping the logo!</Text>
      </View>
      <View style={styles.button}>
        <Button color={appColor} title="Enter" onPress={() => { navigation.navigate("mainPage", { color: appColor }) }} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: width - 100}}>
        <View style={styles.links}>
          <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/GitHub_logo.png')} />
          <Text style={styles.text}>github.com/DiegoVaezman/userApp</Text>
        </View>
        <View style={styles.links}>
          <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/portfolio_logo.png')} />
          <Text style={styles.text}>vaezman.netlify.app/</Text>
        </View>
        {/* <View style={styles.links}>
          <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/linkedin_logo.png')} />
          <Text style={styles.text}>linkedin.com/in/diego-narvaez-guzman</Text>
        </View> */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 130,
    paddingBottom: 20,
    flex: 1
  },
  logo:{
    alignItems: "center",

  },
  logoImg: {
    paddingBottom: 10
  },
  text: {
    fontSize: 10,
    textAlign: "center"
  },
  button: {
    justifyContent: "space-between",
    height: height - 680,
    width: width - 200
  },
  links: {
    alignItems: "center"
  }
});