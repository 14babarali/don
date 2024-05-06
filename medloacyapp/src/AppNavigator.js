import { View, Text } from "react-native";
import React, { useEffect } from 'react';
// import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screens/Splash";
import Login from "./Screens/Auth/Login";
import HomeScreen from "./Screens/MainScreen";
import SignUp from "./Screens/Auth/SignUp";
import Chat from "./bottom/Chat";
import ChatList from "./bottom/ChatList";
import Profile from "./Screens/Profile";
import DeliverMedicine from "./Screens/Pharmacy/DeliverMedicine";


const Stack = createNativeStackNavigator();   

const AppNavigator = () => {

  // const [isTokenPresent, setIsTokenPresent] = React.useState(false);

  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = await AsyncStorage.getItem('userToken');
  //     setIsTokenPresent(!!token);
  //   };

  //   checkToken();
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
     
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#17252A", 
          },
          headerTintColor: "#3AAFA9", 
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatLists"
          component={ChatList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chats"
          component={Chat}
          options={({ route }) => ({ title: route.params.chatName })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DelivMed"
          component={DeliverMedicine}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
