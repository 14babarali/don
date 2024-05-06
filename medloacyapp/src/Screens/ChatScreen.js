import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/auth';
const ChatScreen = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [auth, setAuth] = useAuth();
  
  useEffect(() => {
    fetch('http://192.168.10.30:8080/getallformdata')
     .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
     .then(data => {
        setFormDataList(data);
      })
     .catch(error => console.error('Error fetching form data:', error));
  }, []);

  const openPrescriptionModal = (prescription) => {
    setSelectedPrescription(prescription);
    setModalVisible(true);
  };

  // const getUserInfo = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('userToken');
  //     const userInfoResponse = await fetch('http://192.168.10.30:8080/pharmacy/getuserinfo', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     });
  //     const userInfoData = await userInfoResponse.json();
  //     console.log('User Name:', userInfoData.name);
  //     console.log('User Address:', userInfoData.address);
  //     console.log('User Phone Number:', userInfoData.phone);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleResponse = async (id, response) => {
           if (!auth.token || !auth.user) {
    toast.error("You must be logged in to submit this form.");
    return;
 }
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userInfoResponse = await fetch('http://192.168.10.30:8080/pharmacy/getuserinfo', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const userInfoData = await userInfoResponse.json();
      const additionalUserInfo = {
        name: ('name', auth.user.name),
        address: ('address', auth.user.address),
        phone: ('phone', auth.user.phone),
       email: ('email', auth.user.email),
     user_id: ('user_id', auth.user.id),
     
      };

      const responsePayload = {
        response: response,
        ...additionalUserInfo,
      };

      const submitResponse = await fetch(`http://192.168.10.30:8080/submitresponse/${id}`, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${token}`,
        // },
        body: JSON.stringify(responsePayload),
      });
      const submitData = await submitResponse.json();
      console.log('Success:', submitData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>    phone : {auth?.user?.phone}
          address:{auth?.user?.address}
          Name : {auth?.user?.name}
          Email : {auth?.user?.email}
        </Text>
        </View>
      <FlatList 
        data={formDataList}
        keyExtractor={(item, index) => `${item._id}_${index}`}
        renderItem={({ item }) => (
          <View style={styles.card} key={item._id}>
            <Text style={styles.text}>Sender Name: {item.name}</Text>
            <Text style={styles.text}>Medicine Name: {item.medicineName}</Text>
            <TouchableOpacity onPress={() => openPrescriptionModal(item.prescription)}>
              <Image source={require('../../assets/images/prescription.png')} style={styles.icon} />
            </TouchableOpacity>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.fullScreenImage}
              source={{ uri: selectedPrescription }}
              resizeMode="contain"
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 2,
    padding: 5,
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
  icon: {
    width: 24,
    height: 24,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fullScreenImage: {
    width: '100%',
    height: '50%',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChatScreen;
















// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// const ChatScreen = () => {
//   const [formDataList, setFormDataList] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedPrescription, setSelectedPrescription] = useState(null);

  
//    useEffect(() => {
//     fetch('http://192.168.10.30:8080/getallformdata')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           setFormDataList(data);
//         } catch (error) {
//           console.error('Failed to parse JSON:', error);
//         }
//       })
//       .catch(error => console.error('Error fetching form data:', error));
//   }, []);
//   const openPrescriptionModal = (prescription) => {
//     setSelectedPrescription(prescription);
//     setModalVisible(true);
//   };

//   const getUserInfo = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const userInfoResponse = await fetch('http://192.168.10.30:8080/pharmacy/getuserinfo', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       const userInfoData = await userInfoResponse.json();
//       console.log('User Name:', userInfoData.name);
//       console.log('User Address:', userInfoData.address);
//       console.log('User Phone Number:', userInfoData.phone);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleResponse = async (id, response) => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const userInfoResponse = await fetch('http://192.168.10.30:8080/pharmacy/getuserinfo', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       const userInfoData = await userInfoResponse.json();
//       const additionalUserInfo = {
//         name: userInfoData.name,
//         address: userInfoData.address,
//         phone: userInfoData.phone
//       };

//       const responsePayload = {
//         response: response,
//         ...additionalUserInfo,
//       };

      
//       const submitResponse = await fetch(`http://192.168.10.30:8080/submitresponse/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(responsePayload),
//       });
//       const submitData = await submitResponse.json();
//       console.log('Success:', submitData);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList 
//         data={formDataList}
 
//                 keyExtractor={(item, index) => `${item._id}_${index}`}
//         renderItem={({ item }) => (
         
//                  <View style={styles.card} key={item._id}>
//             <Text style={styles.text}>Name: {item.name}</Text>
//             <Text style={styles.text}>Medicine Name: {item.medicineName}</Text>
//             <TouchableOpacity onPress={() => openPrescriptionModal(item.prescription)}>
//               <Image source={require('../../assets/images/prescription.png')} style={styles.icon} />
//             </TouchableOpacity>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={[styles.button, styles.yesButton]}
//                 onPress={() => handleResponse(item._id, 'Yes')}
//               >
//                 <Text style={styles.buttonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.button, styles.noButton]}
//                 onPress={() => handleResponse(item._id, 'No')}
//               >
//                 <Text style={styles.buttonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Image
//               style={styles.fullScreenImage}
//               source={{ uri: selectedPrescription }}
//               resizeMode="contain"
//             />
//             <TouchableOpacity
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     margin: 2,
//     padding: 5,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 20,
//     width: 100,
//     alignItems: 'center',
//   },
//   yesButton: {
//     backgroundColor: '#3AAFA9',
//   },
//   noButton: {
//     backgroundColor: '#17252A',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 2,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   fullScreenImage: {
//     width: '100%',
//     height: '50%',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default ChatScreen;





