// import React, { useState, useEffect } from 'react';
// import './PharmacyHome.css';
// import { useAuth } from "../../context/auth";
// const PharmacyHome  = () => {
//   const [formDataList, setFormDataList] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedPrescription, setSelectedPrescription] = useState(null);
//   const [auth, setAuth] = useAuth();
  

//   useEffect(() => {
//     fetch('/getallformdata')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parsing response as JSON
//       })
//       .then(data => {
//         setFormDataList(data);
//       })
//       .catch(error => console.error('Error fetching form data:', error));
//   }, []);

//   const openPrescriptionModal = (prescription) => {
//     setSelectedPrescription(prescription);
//     setModalVisible(true);
//   };

//   const handleResponse = async (id, response) => {
//     try {
//       const token = ''; // Provide the token here
//       const userInfoResponse = await fetch('pharmacy/getuserinfo', {
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

//       const submitResponse = await fetch(`/submitresponse/${id}`, {
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

//     <div>
//   {formDataList.map(item => (
//     <div key={item._id} className="card">
//       <p className="text">Name: {item.name}</p>
//       <p className="text">Medicine Name: {item.medicineName}</p>
//       <button className="button yesButton" onClick={() => handleResponse(item._id, 'Yes')}>Yes</button>
//       <button className="button noButton" onClick={() => handleResponse(item._id, 'No')}>No</button>
//       <button onClick={() => openPrescriptionModal(item.prescription)} className="icon">View Prescription</button>
//     </div>
//   ))}
//   {modalVisible && (
//     <div className="centeredView">
//       <div className="modalView">
//         <img src={selectedPrescription} alt="Prescription" className="fullScreenImage" />
//         <button className="button buttonClose" onClick={() => setModalVisible(false)}>Close</button>
//       </div>
//     </div>
//   )}
// </div>

//     // <div>
//     //   {formDataList.map(item => (
//     //     <div key={item._id} style={styles.card}>
//     //       <p style={styles.text}>Name: {item.name}</p>
//     //       <p style={styles.text}>Medicine Name: {item.medicineName}</p>
//     //       <button style={[styles.button, styles.yesButton]} onClick={() => handleResponse(item._id, 'Yes')}>Yes</button>
//     //       <button style={[styles.button, styles.noButton]} onClick={() => handleResponse(item._id, 'No')}>No</button>
//     //       <button onClick={() => openPrescriptionModal(item.prescription)} style={styles.icon}>View Prescription</button>
//     //     </div>
//     //   ))}
//     //   {modalVisible && (
//     //     <div style={styles.centeredView}>
//     //       <div style={styles.modalView}>
//     //         <img src={selectedPrescription} alt="Prescription" style={styles.fullScreenImage} />
//     //         <button style={[styles.button, styles.buttonClose]} onClick={() => setModalVisible(false)}>Close</button>
//     //       </div>
//     //     </div>
//     //   )}
//     // </div>
//   );
// };

//  export default PharmacyHome;



import React, { useState, useEffect } from 'react';
import './PharmacyHome.css';
import { useAuth } from "../../context/auth";

const PharmacyHome = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    fetch('/getallformdata')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parsing response as JSON
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

  const handleResponse = async (id, response) => {
    try {
      const token = ''; // Provide the token here
      const userInfoResponse = await fetch('pharmacy/getuserinfo', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const userInfoData = await userInfoResponse.json();
      const additionalUserInfo = {
        name: userInfoData.name,
        address: userInfoData.address,
        phone: userInfoData.phone
      };

      const responsePayload = {
        response: response,
        ...additionalUserInfo,
      };

      const submitResponse = await fetch(`/submitresponse/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(responsePayload),
      });

      if (submitResponse.ok) {
        // If submission is successful, remove the item from the list
        setFormDataList(formDataList.filter(item => item._id !== id));
      } else {
        console.error('Failed to submit response');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {formDataList.map(item => (
        <div key={item._id} className="card">
          <p className="text">Name: {item.name}</p>
          <p className="text">Medicine Name: {item.medicineName}</p>
          <button className="button yesButton" onClick={() => { handleResponse(item._id, 'Yes'); }}>Yes</button>
          <button className="button noButton" onClick={() => { handleResponse(item._id, 'No'); }}>No</button>
          <button onClick={() => openPrescriptionModal(item.prescription)} className="icon">View Prescription</button>
        </div>
      ))}
      {modalVisible && (
        <div className="centeredView">
          <div className="modalView">
            <img src={selectedPrescription} alt="Prescription" className="fullScreenImage" />
            <button className="button buttonClose" onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyHome;
