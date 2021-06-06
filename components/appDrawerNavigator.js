import * as React from "react";
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from "react-navigation-drawer";

import { AppTabNavigator } from "./appTabNavigator";
import CustomSideBarMenu from './CustomSideBarMenu';
import MainScreen from '../screens/mainScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="fontAwesome5" />,
      },
    },
    // Settings: { screen: Setting,
    //   navigationOptions:{
    //     drawerIcon:<Icon name="settings" type="fontawesome5"/>,
    //     drawerLabel:"Settings"
    //   } },
      
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Home" }
);
