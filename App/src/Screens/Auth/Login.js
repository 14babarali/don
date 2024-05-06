import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import InputBox from "../../../components/inputBox";
import SubmitButton from "../../../components/SubmitButton";
import api from "../../apis/api";

const Login = ({ navigation }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false);

 const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please fill empty boxes");
        setLoading(false);
        return;
      }
      const { data } = await api.post(
        '/login',
        { email, password }
      );


         // if (data && data.token)
           if (res && res.data.success)
      {
        // await storeToken(data.token); // Store the token
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
          
        })
               localStorage.setItem("auth", JSON.stringify(res.data));
          localStorage.setItem("user_id", res.data.id);
             navigation.navigate('HomeScreen');
        
             setEmail("");
        setPassword("");
      }
        navigation.navigate('Home');
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      Alert.alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.pagetital}>MedLocate</Text>
      <View>
        <InputBox
          inputtitle={"Email"}
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          autoComplete="email"
        />
        <InputBox
          inputtitle={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>

      <SubmitButton
        btntitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />

      <Text style={styles.linkText}>
        Don't have an Account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          SignUp
        </Text>
      </Text>
    </View>
 );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#fff', // Set a white background for the container
  },
  pageTitle: {
    marginBottom: 20, // Increased space below the title for better visual separation
    fontSize: 30,
    color: "#3AAFA9",
    fontWeight: "bold",
  },
pagetital: {
    marginBottom: 10,
    fontSize: 30,
    color: "#3AAFA9",
    fontWeight: "bold",
 },

  input: {
    height: 50, // Increased height for better touch area
    width: "100%",
    borderColor: "#3AAFA9", // Changed border color to match the theme
    borderWidth: 2, // Increased border width for better visibility
    borderRadius: 10, // Increased border radius for rounded corners
    marginBottom: 15, // Increased space between inputs
    paddingHorizontal: 15, // Increased padding for text inside the input
    fontSize: 16, // Increased font size for better readability
    color: "#17252A", // Set text color to dark shade for contrast
    backgroundColor: '#f0f0f0', // Light grey background for the input
  },
  showHideButton: {
    alignSelf: 'flex-end', // Align the button to the right of the password input
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  showHideButtonText: {
    color: "#3AAFA9",
    fontWeight: "bold",
  },
  errorText: {
    alignSelf: 'flex-start', // Align error text to the left
    color: 'red', // Red color for errors
    marginBottom: 10, // Space below the error text
  },
  button: {
    backgroundColor: "#3AAFA9",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    color: "#3AAFA9",
    fontWeight: "bold",
  },
});

export default Login;
