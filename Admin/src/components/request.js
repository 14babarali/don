import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch form data from the API (replace with your actual API endpoint)
    const fetchFormData = async () => {
      try {
        const response = await axios.get('/getallformdata'); // Replace with your API endpoint
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <>
      <AdminPanelLayout />
      <div style={{ display: 'flex' }}>
        {/* Left side div (45%) */}
        <div style={{ flex: '45%', padding: '12px', marginTop: '5px' }}>
          {/* Add your content here */}
          <h1>Request</h1>
          {/* Additional content for the left side */}
        </div>

        {/* Right side div (55%) */}
        <div style={{ flex: '55%', padding: '12px', marginTop: '5px' }}>
          <h2>Patient Data</h2>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Medication Name</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.patientName}</td>
                  <td>{entry.medicationName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Request;
