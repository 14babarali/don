import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const DeliverMedicine = () => {
  const [medicinename, setMedicineName] = useState('Panadol');
  const [address, setAddress] = useState('G15, near bank al habib');
  const [contact, setContact] = useState('03427111537');
  const [quantity, setQuantity] = useState('12');

  return (
    <View style={styles.container}>
      <View style={styles.headerProfiletxt}>
        <Text style={styles.headertxt}>
          Patient Delivery Details
        </Text>
      </View>
      <Image source={require('../../../assets/images/me1.png')} style={styles.image} />

      <Text style={styles.txtinputs}>Medicine Name:</Text>
      <TextInput
        style={styles.input}
        value={medicinename}
        onChangeText={(text) => setMedicineName(text)}
      />

      <Text style={styles.txtinputs}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <Text style={styles.txtinputs}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        value={contact}
        keyboardType='numeric'
        maxLength={11}
        onChangeText={(text) => setContact(text)}
      />

      <Text style={styles.txtinputs}>Qty:</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        keyboardType='numeric'
        maxLength={2}
        onChangeText={(text) => setQuantity(text)}
      />

    

      <TouchableOpacity style={styles.btnSave}onPress={handleSave}>
            <Text style={styles.btnSavetxt}>Deliver</Text>
      </TouchableOpacity>
    </View>
  );
};

const handleSave = () => {
  // Implement the logic to save the user's profile changes to a database or server.
  // You can make an API call here to update the user's information.
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#F0F0F0",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf:"center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#3AAFA9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:"#3AAFA9",
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
  },
  btnSave:{
    marginTop:50,
    backgroundColor:'#3AAFA9',
    color:"#17252A",
    width:"100%",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    
  },
  btnSavetxt:{
    fontWeight:"bold",
    fontSize:16,
  },
  txtinputs:{
    color:"#17252A"
  },
  headerProfiletxt:{
    width:"100%",
    height:50,
    backgroundColor:"#17252A",
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginBottom:20,
    
  },

  headertxt:{
    color:"#3AAFA9",
    fontSize:18,
  }
});

export default DeliverMedicine;
