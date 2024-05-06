// import React, { useEffect, useState } from "react";
// import "./Notify.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Notify = ({ onClose }) => {
//   const [notifications, setNotifications] = useState([]);
//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.preventDefault();
//     onClose(); // Close the popup
//   };

//   const handleChatButtonClick = (notificationId) => {
//     console.log(
//       `Chat button clicked for notification with ID ${notificationId}`
//     );
//     navigate("/chat");
//   };

//   useEffect(() => {
//     fetchPharmacyResponse();
//   }, []);

//   const fetchPharmacyResponse = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/getyesResponses");
//       setNotifications(response.data);
//     } catch (error) {
//       console.error("Error fetching pharmacy response:", error);
//     }
//   };

//   return (
//     <div className="notification-popup">
//       <div className="popup-card">
//         <div className="popup-content">
//           <h3>Pharmacy Response</h3>
//           {notifications.length > 0 ? (
//             <ul className="popup-list">
//               {notifications.map((notification) => (
//                 <li key={notification._id} className="popup-item">
//                   <strong>Medicine Name:</strong> {notification.medicineName}
//                   <br />
//                   <strong>Prescription:</strong> {notification.prescription}
//                   <br />
//                   <strong>Status:</strong> {notification.status}
//                   <br />
//                   {notification.response === "Yes" && (
//                     <button
//                       className="btn btn-success"
//                       onClick={() => handleChatButtonClick(notification._id)}
//                     >
//                       Chat
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No notifications to display.</p>
//           )}
//           <button onClick={handleClick} className="btn btn-primary">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notify;

import React, { useEffect, useState } from "react";
// import "./Notify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Notify = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    // onClose(); // Close the popup
    setShowPopup(false);
  };

  const handleChatButtonClick = (notificationId) => {
    console.log(
      `Chat button clicked for notification with ID ${notificationId}`
    );
    navigate("/chat");
  };

  useEffect(() => {
    fetchPharmacyResponse();
  }, []);

  const fetchPharmacyResponse = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getyesResponses");
      setNotifications(response.data);
    } catch (error) {
      console.error("Error fetching pharmacy response:", error);
    }
  };

  //   return (
  //     <div className="notify-container">
  //       <div className="notify-header">
  //         <h2>Notifications</h2>
  //         <button onClick={handleClick}>Close</button>
  //       </div>
  //       <div className="notify-content">
  //         {notifications.map((notification) => (
  //           <div key={notification.id} className="notification-item">
  //             <p>Medicine Name: {notification.medicineName}</p>
  //             <p>Response: {notification.response}</p>
  //             <button onClick={() => handleChatButtonClick(notification.id)}>
  //               Chat
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  //   return (
  //     <div className="notification-popup">
  //       <div className="notify-header">
  //         <h2>Notifications</h2>
  //         <button onClick={handleClick}>Close</button>
  //       </div>
  //       <div className="notify-content">
  //         {notifications
  //           .filter((notification) => notification.response === "yes")
  //           .map((notification) => (
  //             <div key={notification.id} className="notification-item">
  //               <p>Medicine Name: {notification.medicineName}</p>
  //               <p>Response: {notification.response}</p>
  //               <button onClick={() => handleChatButtonClick(notification.id)}>
  //                 Chat
  //               </button>
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      {showPopup && (
        <div className="notification-popup">
          <div className="popup-overlay" onClick={handleClick}></div>
          <div className="popup-card">
            <div className="popup-content">
              <h3>Notifications</h3>
              <button onClick={handleClick} className="btn btn-primary">
                Close
              </button>
              <div className="popup-list">
                {notifications
                  .filter((notification) => notification.response === "yes")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className="popup-item notification-item"
                    >
                      <p>Medicine Name: {notification.medicineName}</p>
                      <p>Response: {notification.response}</p>
                      <button
                        onClick={() => handleChatButtonClick(notification.id)}
                        className="btn btn-success"
                      >
                        Chat
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Notify;
