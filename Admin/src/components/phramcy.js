
import AdminPanelLayout from './AdminPanelLayout';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pharmacy = () => {
  // Sample pharmacy data (you can replace this with actual data from your backend)

  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch pharmacy data from the API
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get('api/v1/pharmacy'); // Replace with your actual API endpoint
        setPharmacies(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching pharmacy data:', error);
      }
    };

    fetchPharmacies();
  }, [])


 // Filter pharmacies based on search term
  const filteredPharmacies = pharmacies.filter((pharmacy) => {
    const { name } = pharmacy;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerSearchTerm)
     
   
    );
  });


  return (
      <>
      <AdminPanelLayout />
      <div style={{ paddingTop: 12, marginTop: 5 }}>
        {/* Additional components or content can be added here */}
      </div>
      <h1>Pharmacy</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Total pharmacies: {filteredPharmacies.length}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Name</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Address</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Phone Number</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>License Number</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Email</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Responses</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
              <td>{pharmacy.phone}</td>
              <td>{pharmacy.licenseNumber}</td>
              <td>{pharmacy.email}</td>
              <td>{pharmacy.responses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
   
  );
};

export default Pharmacy;
