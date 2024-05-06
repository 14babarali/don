import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../sideScreens/HomeScreen";
import { TabRouter } from "@react-navigation/native";
import Sidebar from "../Sidebar";

const Drawer = createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;
