import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../bottom/Home";
import OrderList from "../bottom/OrderList";
import ChatList from "../bottom/ChatList";
const Bottom = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/home.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Chat"
        component={ChatList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/chat.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="OrderList"
        component={OrderList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/order.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default HomeScreen;
