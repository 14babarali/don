import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import MainScreen from "./MainScreen";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 4000);
  }, []);
  return <View style={styles.MainContainer}></View>;
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17252A",
  },
  maintxt: {
    fontSize: 20,
  },

  splashImg: {
    width: 200,
    height: 200,
  },
});

export default Splash;
