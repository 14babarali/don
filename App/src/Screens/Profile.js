import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [license, setLicense] = useState('ABC123456');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "http://192.168.10.30:8080/api/v1/auth/profile"
      );
      const profileData = response.data;

      setName(profileData.name);
      setEmail(profileData.email);
      setPhone(profileData.phone);
      // setLicense(profileData.license);
    } catch (error) {
      console.error("Error fetching profile:", error);
      // Handle error, show error message, etc.
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        "http://192.168.10.30:8080/api/v1/auth/profile",
        {
          name,
          email,
          phone,
        }
      );
      console.log("Profile saved:", response.data);
      // Handle success, show success message, navigate to another screen, etc.
    } catch (error) {
      console.error("Error saving profile:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerProfiletxt}>
        <Text style={styles.headertxt}>Profile Details</Text>
      </View>
      <Image
        source={require("../../assets/images/me1.png")}
        style={styles.image}
      />

      <Text style={styles.txtinputs}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.txtinputs}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.txtinputs}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
        <Text style={styles.btnSavetxt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F0F0F0",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  input: {
    borderColor: "#3AAFA9",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "#3AAFA9",
  },
  btnSave: {
    marginTop: 50,
    backgroundColor: "#3AAFA9",
    color: "white",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnSavetxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  txtinputs: {
    color: "#17252A",
  },
  headerProfiletxt: {
    width: "100%",
    height: 50,
    backgroundColor: "#3AAFA9",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  headertxt: {
    color: "white",
    fontSize: 18,
  },
});

export default Profile;
