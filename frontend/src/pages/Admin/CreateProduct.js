import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import axios from "axios";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const CreateCategory = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const tableHeaders = ["Name", "Email", "Phone", "Address", "Update", "Delete"];

  useEffect(() => {
    // Fetch users from your backend
    axios.get('http://localhost:8080/pharmacy/userdata')
      .then(response => {
        // Filter users with role 1 and exclude user with email "admin@medlocate.com"
      
        setUsers(filteredUsers);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (user) => {
    axios.delete(`http://localhost:8080/pharmacy/userdata/${user._id}`)
      .then(response => {
        // Remove the deleted user from the state
        setUsers(users.filter(u => u._id !== user._id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdateSubmit = (updatedUser) => {
    // Implement the update functionality
    console.log('Updated user:', updatedUser);
    setIsUpdateModalOpen(false);
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
    <AdminLayout title={"Dashboard - Create Category"}>
    <div className="container">
      <h1 className="my-4">Pharmacy Information</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>License Number</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy._id}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
              <td>{pharmacy.phone}</td>
              <td>{pharmacy.licenseNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminLayout>
  );
};

export default CreateCategory;
