import React from "react";
import "./../../styles/AuthStyles.css"; // Import your CSS file for styling

const NotificationPopup = ({ notifications, onClose }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior (navigation)
    onClose(); // Close the popup
  };

  const handleChatButtonClick = (notificationId) => {
    // Implement logic to handle chat button click for the given notification
    console.log(
      `Chat button clicked for notification with ID ${notificationId}`
    );
  };

  return (
    <div className="notification-popup-container">
      {" "}
      {/* Added container class */}
      <div className="notification-popup">
        <div className="popup-content">
          <h3>Pharmacy Response</h3>
          {notifications.length > 0 ? (
            <ul className="notification-list">
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item">
                  <strong>{notification.title}</strong>: {notification.message}
                  <button
                    className="chat-button"
                    onClick={() => handleChatButtonClick(notification.id)}
                  >
                    Chat
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No notifications to display.</p>
          )}
          <button onClick={handleClick}>Close</button>{" "}
          {/* Use handleClick function */}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
