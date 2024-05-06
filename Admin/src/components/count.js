import React, { useEffect, useState } from "react";

import axios from "axios";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const Count = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const tableHeaders = ["Name", "Email", "Phone", "Address", "Update", "Delete"];

  useEffect(() => {
   
    axios.get('http://localhost:8080/api/users')
      .then(response => {

        const filteredUsers = response.data.users.filter(user => user.role === 0);
        setUsers(filteredUsers);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (user) => {
    axios.delete(`http://localhost:8080/api/users/${user._id}`)
      .then(response => {
        // Remove the deleted user from the state
        setUsers(prevUsers => prevUsers.filter(u => u._id !== user._id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdateSubmit = (updatedUser) => {
    // Send updated user data to the backend API
    axios.put(`http://localhost:8080/api/users${updatedUser._id}`, updatedUser)
      .then(response => {
        // Update the user in the state
        setUsers(prevUsers => prevUsers.map(user => (user._id === updatedUser._id ? response.data.user : user)));
        setIsUpdateModalOpen(false);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (

      <div className="p-3 p-8 pt-4 m-3 mt-4 container-fluid dashboard">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FaSearch /></span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <p>Total Users: {users.length}</p>
              {/* Add more information here as needed */}
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Patient User</h1>
          <div className="table-responsive">
            <table className="table table-hover table-borderless">
              <thead>
                <tr>
                  {tableHeaders.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {filteredUsers.map(user => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleUpdate(user)}>
                        <FaEdit /> Update
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(user)}>
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

  );
};

export default Count;
