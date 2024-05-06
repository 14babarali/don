import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../../context/auth';
import { Toast } from 'react-native-toast-notifications';

const Form = () => {
  const [medicineName, setMedicineName] = useState('');
  const [prescription, setPrescription] = useState(null);
  const [auth] = useAuth();

  const handleSubmit = async () => {
    if (!auth.token || !auth.user) {
      Toast.show('You must be logged in to submit this form.');
      return;
    }

    if (!medicineName.trim()) {
      Toast.show('Please enter the medicine name.');
      return;
    }

    if (prescription) {
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
      if (!allowedTypes.includes(prescription.type)) {
        Toast.show('Prescription file type not allowed. Please upload a png, jpg, or pdf file.');
        return;
      }
      if (prescription.size > 2 * 1024 * 1024) {
        Toast.show('Prescription file size should be less than or equal to 2 MB.');
        return;
      }
    }

    const formData = new FormData();
    formData.append('medicineName', medicineName);
    formData.append('prescription', {
      uri: prescription.uri,
      name: 'prescription.jpg',
      type: prescription.type,
    });
    formData.append('name', auth.user.name);
    formData.append('email', auth.user.email);
    formData.append('user_id', auth.user.id);

    try {
      const res = await axios.post('http://your-api-url/submitform', formData);

      if (res.data.success) {
        const randomPharmacistId = Math.floor(Math.random() * 2); // Generate a random ID
        Toast.show(`Submitted successfully! Sent your medicine request to Pharmacist ${randomPharmacistId}.`);
        setMedicineName('');
        setPrescription(null);
      } else {
        Toast.show('An error occurred.');
      }
    } catch (error) {
      Toast.show('An error occurred while submitting the form.');
    }
  };

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Toast.show('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPrescription(result);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Medicine Name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={medicineName}
        onChangeText={setMedicineName}
      />
      <Button title="Pick Prescription" onPress={handlePickImage} />
      {prescription && <Text>Prescription selected: {prescription.uri}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Form;
