
import React, { useState } from "react";
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,KeyboardAvoidingView,ScrollView
} from "react-native";

// import api from "../../apis/api";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
// import { Ionicons } from '@expo/vector-icons';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const navigation = useNavigation();

//  const handleSubmit = async () => {
//   try {
//     const res = await axios.post(
//       'http://192.168.10.30:8080/pharmacy/signup',
//       {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         answer,
//         licenseNumber,
//       }
//     );
//     if (res && res.data.success) {
//       showMessage({
//         message: res.data.message,
//         type: "success",
//       });
//       navigation.navigate("Login");
//     } else {
//       showMessage({
//         message: res.data.message,
//         type: "danger",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     showMessage({
//       message: "Something went wrong",
//       type: "danger",
//     });
//   }
// };


  const handleSubmit = async () => {
  try {
    const res = await axios.post(
      'http://192.168.10.30:8080/pharmacy/signup',
      {
        name,
        email,
        password,
        phone,
        address,
        answer,
        licenseNumber,
      }
    );
    // Check if the status code is 201 (Created) for signup
    if (res.status === 201) {
      showMessage({
        message: "Signup successful!",
        type: "success",
      });
      navigation.navigate("Login");
    } else {
      showMessage({
        message: "Signup failed. Please try again.",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Something went wrong",
      type: "danger",
    });
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^03\d{9}$/;
    setIsPhoneValid(phoneRegex.test(number));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
    <View style={styles.contentContainer}>
      <Text style={styles.pageTitle}>MedLocate</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder="Pharmacy Name"
        autoFocus
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder=" Email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder=" Password"
        secureTextEntry={!showPassword}
    //  right={
    //       <TextInput
    //         name={() => (
    //        <TouchableOpacity onPress={togglePasswordVisibility}
    //                style={styles.showHideButton}>
    //               <Text style={styles.showHideButtonText}>
    //       {showPassword ? "Hide" : "Show"}
    //     </Text>
    //           </TouchableOpacity>
    //         )}
    //       />
    //     }
    
      />
      
      
      <TextInput
        value={phone}
        onChangeText={(text) => {
          setPhone(text);
          validatePhoneNumber(text);
        }}
        style={styles.input}
        placeholder="Pharmacy Phone"
        keyboardType="phone-pad"
      />
      {!isPhoneValid && (
        <Text style={styles.errorText}>
          Invalid phone number
        </Text>
      )}
      <TextInput
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
        placeholder="Pharmacy Address"
      />
      <TextInput
        value={answer}
        onChangeText={(text) => setAnswer(text)}
        style={styles.input}
        placeholder="Security key"
      />
      <TextInput
        value={licenseNumber}
        onChangeText={(text) => setLicenseNumber(text)}
        style={styles.input}
        placeholder="Pharmacy License Number"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
{/*       
      <Text style={styles.linkText}>
        <TouchableOpacity onPress={() => navigation.navigate("PharmacySignup")}>
          <Text style={styles.link}>Login as Pharmacy</Text>
        </TouchableOpacity>
      </Text> */}
      <Text style={styles.linkText}>
      
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    marginBottom: 20, // Increased space below the title for better visual separation
    fontSize: 30,
    color: "#3AAFA9",
    fontWeight: "bold",
  },
  input: {
    height: 50, 
    width: "100%",
    borderColor: "#3AAFA9", 
    borderWidth: 2, 
    borderRadius: 10, 
    marginBottom: 15, 
    paddingHorizontal: 15, 
    fontSize: 16, 
    color: "#17252A", 
    backgroundColor: '#f0f0f0',
  },
  showHideButton: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  showHideButtonText: {
    color: "#3AAFA9",
    fontWeight: "bold",
  },
  errorText: {
    alignSelf: 'flex-start', 
    color: 'red',
    marginBottom: 10, 
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
export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   pageTitle: {
//     marginBottom: 10,
//     fontSize: 30,
//     color: "#3AAFA9",
//     fontWeight: "bold",
//   },
//   input: {
//     height: 40,
//     width: "100%",
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: "#3AAFA9",
//     padding: 10,
//     borderRadius: 5,
//     width: "100%",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   linkText: {
//     marginTop: 15,
//     fontSize: 16,
//     textAlign: "center",
//   },
//   link: {
//     color: "#3AAFA9",
//   },
// });




