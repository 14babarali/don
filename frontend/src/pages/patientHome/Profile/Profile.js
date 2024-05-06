// Profile.js

import React, { useState } from 'react';
import './Profile.css'; // Import your Profile styles here

const Profile = () => {
  // Assuming user data is fetched from some authentication context or API
  const [userData, setUserData] = useState({
    name: 'Babar ALi Assad',
    email: 'bababrali@medlocate.com',
    profilePic: 'path/to/profile-pic.jpg', 
    // Add more user data fields as needed 
    phone: 'phone number',
  });

  const handleProfileUpdate = (newData) => {
    // Handle updating user data (e.g., sending a request to update user info in the backend)
    setUserData((prevData) => ({ ...prevData, ...newData }));
    // Optionally, show a success message or handle errors
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-info">
        <img src={userData.profilePic} alt="Profile" className="profile-pic" />
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>phone: {userData.phone}</p>
          {/* Add more user information fields as needed */}
        </div>
      </div>

      <div className="profile-actions">
        <h3>Update Profile</h3>
        {/* You can use form inputs to allow users to update their information */}
        <form onSubmit={(e) => { e.preventDefault(); /* handle form submission */ }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={userData.name}
            onChange={(e) => handleProfileUpdate({ name: e.target.value })}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={(e) => handleProfileUpdate({ email: e.target.value })}
          />

          {/* Add more form fields as needed for updating user information */}
          
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
