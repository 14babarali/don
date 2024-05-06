import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const PharmacySignup = () => {
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licensePic, setLicensePic] = useState(null);
    const [expireDate, setExpireDate] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup button clicked!');
        console.log('License Number:', licenseNumber);
        console.log('License Pic:', licensePic);
        console.log('Expire Date:', expireDate);
        console.log('Website Link:', websiteLink);
    };

    const handleLicensePicUpload = () => {
        const options = {
            title: 'Select License Picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            mediaType: 'mixed', // Allow both images and PDFs
            allowsEditing: true,
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setLicensePic(source);
            }
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="License Number"
                value={licenseNumber}
                onChangeText={text => setLicenseNumber(text)}
            />
            <TouchableOpacity style={styles.uploadButton} onPress={handleLicensePicUpload}>
                <Text>
                    <Icon name="camera" size={20} color="#000" /> {/* Correctly wrapped in a <Text> component */}
                </Text>
                <TextInput
                    style={[styles.input, { marginLeft: 5 }]} // Add some margin to separate the icon and the text
                    placeholder="License Pic"
                    editable={false}
                    value={licensePic ? 'License Pic uploaded' : ''}
                />
            </TouchableOpacity>
            {licensePic && <Image source={licensePic} style={styles.imagePreview} />}
            <TextInput
                style={styles.input}
                placeholder="Expire Date"
                value={expireDate}
                onChangeText={text => setExpireDate(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Website Link (optional)"
                value={websiteLink}
                onChangeText={text => setWebsiteLink(text)}
            />
            <Button title="Signup" onPress={handleSignup} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    uploadButton: {
        marginBottom: 10,
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center icon and text vertically
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});

export default PharmacySignup;
