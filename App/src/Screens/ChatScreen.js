import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Fetch the form data when the component mounts
    fetch('http://192.168.100.109:8080/getallformdata')
      .then(response => response.json())
      .then(data => setFormDataList(data))
      .catch(error => console.error('Error fetching form data:', error));
  }, []);

  const handleResponse = (id, response) => {
    // Send the response to the backend
    fetch('http://192.168.100.109:8080/respond', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, response }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Remove the item from the list
          setFormDataList(currentList => currentList.filter(item => item._id !== id));
        }
      })
      .catch(error => console.error('Error sending response:', error));
  };

  return (
    <FlatList
      data={formDataList}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Medicine Name: {item.medicineName}</Text>
          <Text style={styles.text}>Prescription: {item.prescription}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.yesButton]}
              onPress={() => handleResponse(item._id, 'Yes')}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.noButton]}
              onPress={() => handleResponse(item._id, 'No')}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#3AAFA9',
  },
  noButton: {
    backgroundColor: '#17252A',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;






// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const ChatScreen = () => {
//   const [conversations, setConversations] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [newItems, setNewItems] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hiddenItems, setHiddenItems] = useState([]);

//   useEffect(() => {
//     fetchConversations();
//     const intervalId = setInterval(fetchConversations, 900000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const fetchConversations = async () => {
//     try {
//       const response = await fetch(
//         "http://192.168.10.30:8080/getallformdata?userId=${name}"
//       );
//       const data = await response.json();
//       setConversations(data);
//       const newData = data.filter(
//         (item) => !item.response && !hiddenItems.includes(item._id)
//       );
//       setNewItems(newData);
//     } catch (error) {
//       console.error("Error fetching conversations:", error);
//     }
//   };

//   const toggleModal = () => {
//     setModalVisible(!modalVisible);
//   };

//   const handleResponse = async (id, response) => {
//     try {
//       const response = await fetch("http://192.168.10.30:8080/respond", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id, response }),
//       });

//       if (response.ok) {
//         console.log("Response saved successfully.");
//         setHiddenItems([...hiddenItems, id]);
//         fetchConversations();
//       } else {
//         console.error("Failed to save response.");
//       }
//     } catch (error) {
//       console.error("Error saving response:", error);
//     }
//   };

//   const renderAdditionalDetails = (item) => {
//     return (
//       <View style={styles.additionalDetails}>
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Name:</Text>
//           <Text style={styles.detailValue}>{item.name}</Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Address:</Text>
//           <Text style={styles.detailValue}>{item.address}</Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Text style={styles.detailLabel}>Sent At:</Text>
//           <Text style={styles.detailValue}>{item.sentAt}</Text>
//         </View>
//       </View>
//     );
//   };

//   const handleImagePress = (imageUri) => {
//     setSelectedImage(imageUri);
//     toggleModal();
//   };

//   const renderPrescription = (item) => {
//     return (
//       <TouchableOpacity onPress={() => handleImagePress(item.prescription)}>
//         <Ionicons name="ios-medical" size={30} color="#17252A" />
//       </TouchableOpacity>
//     );
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//     setSelectedImage(null);
//   };

//   // Fetch real data from the API endpoint
//   const [realData, setRealData] = useState([]);

//   useEffect(() => {
//     fetchRealData();
//   }, []);

//   const fetchRealData = async () => {
//     try {
//       const response = await fetch("http://192.168.10.30:8080/getallformdata");
//       const data = await response.json();
//       setRealData(data);
//     } catch (error) {
//       console.error("Error fetching real data:", error);
//     }
//   };
//   useEffect(() => {
//     fetchRealData();
//   }, []);

//   const renderChatItem = (item) => {
//     if (!hiddenItems.includes(item._id)) {
//       return (
//         <View key={item._id} style={styles.chatItem}>
//           <View style={styles.chatContent}>
//             <TouchableOpacity
//               onPress={() => handleImagePress(item.prescription)}
//             >
//               <Image
//                 source={{ uri: item.prescription }}
//                 style={styles.chatImage}
//               />
//             </TouchableOpacity>
//             <View style={styles.chatText}>
//               <Text style={styles.medicineName}>{item.medicineName}</Text>
//               {/* Add additional conversation details here */}
//               {renderAdditionalDetails(item)}
//             </View>
//           </View>
//           <View style={styles.buttonContainer}>
//             <Button
//               title="Yes"
//               onPress={() => handleResponse(item._id, "Yes")}
//               color="#17252A"
//             />
//             <Button
//               title="No"
//               onPress={() => handleResponse(item._id, "No")}
//               color="#3AAFA9"
//             />
//           </View>
//         </View>
//       );
//     } else {
//       return null;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {realData.map((item) => renderChatItem(item))}
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         onRequestClose={handleModalClose}
//       >
//         <View style={styles.modalContainer}>
//           <Image source={{ uri: selectedImage }} style={styles.modalImage} />
//           <Button title="Close" onPress={handleModalClose} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   chatItem: {
//     width: "90%",
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   chatContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   chatImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginRight: 15,
//   },
//   chatText: {
//     flex: 1,
//   },
//   medicineName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 10,
//   },
//   additionalDetails: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 5,
//   },
//   detailRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 5,
//   },
//   detailLabel: {
//     fontWeight: "bold",
//   },
//   detailValue: {
//     flex: 1,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalImage: {
//     width: "80%",
//     height: "80%",
//     resizeMode: "contain",
//   },
// });

// export default ChatScreen;
