import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Picker,
} from "react-native";

import MyHeader from "../components/myHeader";
import db from "../config";
import firebase from "firebase";

import { RFValue } from "react-native-responsive-fontsize";

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    // const editIni = require("../ini.json");
    this.state = {
      name: "",
      rateOfCowMilk: "",
      rateOfBuffaloMilk: "",
      rateOfCurd: "",
      rateOfGhee: "",
      showRates: true,
      isModalVisible: false,
      username: "",
      password: "",
      confirmPassword: "",
      place: "Camp",
    };
  }

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        //Alert.alert("Login Sucessfully");
        this.props.navigation.navigate("Main");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.25 }}>
          {/* <View style={{ flex: 0.15 }} />
          <View style={styles.santaView}>
            <Image
              source={require("../assets/up-logo.jpeg")}
              style={styles.santaImage}
            />
          </View>
        </View> */}
        <View style={{ flex: 0.45 }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{ flex: 0.3 }}>
          <Image
            source={require("../assets/down-logo.jpeg")}
            style={styles.bookImage}
            resizeMode={"stretch"}
          />
        </View> */}
      </View>

       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8",
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
    marginTop:RFValue(400),
  },
  button: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    marginTop:RFValue(300),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: "#32867d",
    fontWeight: "200",
    fontSize: RFValue(20),
  },
  label: {
    fontSize: RFValue(13),
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20),
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButtonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d",
    marginTop: RFValue(10),
  },
  scrollview: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d",
  },
  santaView: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  santaImage: {
    width: "50%",
    height: "100%",
    resizeMode: "stretch",
  },
  TextInput: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  bookImage: {
    width: "100%",
    height: RFValue(220),
  },
});
