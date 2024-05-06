// Settings.js

import React, { useState } from 'react';
import './Settings.css'; // Import your Settings styles here

const Settings = () => {
  // Assuming user settings are fetched from some authentication context or API
  const [userSettings, setUserSettings] = useState({
    receiveNotifications: true,
    darkMode: false,
    language: 'en',
    // Add more user settings as needed
  });

  const handleSettingToggle = (settingKey) => {
    // Handle toggling settings (e.g., sending a request to update user settings in the backend)
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
    // Optionally, show a success message or handle errors
  };

  const handleLanguageChange = (e) => {
    // Handle changing language setting
    const newLanguage = e.target.value;
    setUserSettings((prevSettings) => ({ ...prevSettings, language: newLanguage }));
    // Optionally, show a success message or handle errors
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      <div className="setting-item">
        <label htmlFor="receiveNotifications">Receive Notifications:</label>
        <input
          type="checkbox"
          id="receiveNotifications"
          checked={userSettings.receiveNotifications}
          onChange={() => handleSettingToggle('receiveNotifications')}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="darkMode">Dark Mode:</label>
        <input
          type="checkbox"
          id="darkMode"
          checked={userSettings.darkMode}
          onChange={() => handleSettingToggle('darkMode')}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          value={userSettings.language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="es">urdu</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      {/* Add more setting items as needed */}

      <button onClick={() => alert('Settings updated successfully!')}>Save Changes</button>
    </div>
  );
};

export default Settings;
