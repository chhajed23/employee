import firebase from "firebase";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import db from "../config";
import MyHeader from "../components/myHeader";
import moment from "moment";

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      // name: "",
      address: [],
      showRates: true,
      username: [],
      password: "",
      confirmPassword: "",
      docId: "",
      location: [],
      users: [],
    };
  }

  getAllUserDetails = async () => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            address: data.address,
            username: data.username,
            //  // name: doc.data().first_name + " " + doc.data().last_name,
            //   docId: doc.id,
          });
          console.log(this.state.username);
        });
      });
  };

  fetchLocation = () => {
    db.collection("locations").onSnapshot((snapshot) => {
      var location = snapshot.docs.map((doc) => doc.data());
      this.setState({ location: location });
    });
  };

  componentDidMount() {
    this.fetchLocation();
    this.getAllUserDetails();
  }

  render() {
    {
      this.state.location.map((item) => {
        <View>
          <Text>{item.address}</Text>
          {db
            .collection("users")
            .where("address", "==", item.address)
            .get()
            .then((snapshot) => {
              var users = snapshot.docs.map((doc) => doc.data());
              this.setState({ users: users });
            })}
        </View>;
        this.state.users.map((i) => {
          <Text>{i.username}</Text>;
        });
      });
    }
    return (
      <View style={styles.container}>
        {/* <MyHeader/>
        <Text
          style={{
            color: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.state.address}
        </Text>

        <TouchableOpacity>
          <Text>{this.state.username}</Text> 
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
