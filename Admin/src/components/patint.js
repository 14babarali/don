import React, { useEffect, useState } from 'react';
import AdminPanelLayout from './AdminPanelLayout';
// import Count from './count';
// import UserTable from './UserTable';

import axios from 'axios';
const Patint = () => {
   const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data); // Set fetched users data
        setLoading(false); // Loading is complete
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchUsers();
  }, [])

  return (
    <>
      <AdminPanelLayout />
      {/* <UserTable/> */}
          {/* <Count/> */}
   <div style={{ paddingTop: 12 ,marginTop:5}}>
              
      
      <h1>Patients List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Name</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Email</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Phone Number</th>
            <th style={{ backgroundColor: '#17252A', color: '#FFFF' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
              </table>
                  </div>
    </>
  );
};

export default Patint;
