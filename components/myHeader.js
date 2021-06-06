import * as React from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";


export default class MyHeader extends React.Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#696969"
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
        }}
        rightComponent={
          <View style={{ flex: 0.1 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                height: "100%",
              }}
              onPress={() => {
                this.props.navigation.navigate("WelcomeScreen");
                firebase.auth().signOut();
              }}
            >
              <Icon
                name="logout"
                type="antdesign"
                size={RFValue(20)}
                iconStyle={{ paddingLeft: RFValue(10) }}
              />
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}
