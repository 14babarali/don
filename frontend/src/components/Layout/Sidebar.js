import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import CSS file for styling

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/v1/users");
        setUsers(res.data);
        setSearchResults(res.data); // Initialize search results with all users
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterUsers(event.target.value);
  };

  // Function to filter users based on search term
  const filterUsers = (term) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header" style={{ backgroundColor: "#3AAFA9", color: "#FFFFFF" }}>
        <h3>Chat App</h3>
      </div>
      <div className="sidebar-content" style={{ backgroundColor: "#17252A" }}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <h4 style={{ color: "#FFFFFF" }}>Users Online</h4>
        <ul>
          {searchResults.map((user) => (
            <li key={user._id}>
              <Link to={`/chat/${user._id}`} style={{ color: "#FFFFFF" }}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
