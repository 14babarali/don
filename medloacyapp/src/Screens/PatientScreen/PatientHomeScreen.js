import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PatientHomeScreen = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            setSelectedFile(res);
            // You can perform further operations with the selected file here
            // For example, you can upload it to a server using a network request
            // or process it in any other way you need.
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the file picker
                console.log('User cancelled file picker');
            } else {
                // An error occurred while picking the file
                console.log('Error picking file:', err);
                Alert.alert('Error', 'Failed to pick file. Please try again.');
            }
        }
    };

    return (
        <View>
            <Button title="Upload File" onPress={handleFileUpload} />
            {selectedFile && (
                <View>
                    <Text>Selected File: {selectedFile.name}</Text>
                    {/* Display additional file details if needed */}
                </View>
            )}
        </View>
    );
};

export default PatientHomeScreen;