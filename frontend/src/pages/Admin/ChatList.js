import React, { useState, useEffect } from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";

const ChatList = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Dummy data for chat messages
  const dummyData = [
    { id: 1, sender: "Pharmacy", receiver: "Patient", message: "Hello, how can I help you today?", timestamp: new Date() },
    { id: 2, sender: "Patient", receiver: "Pharmacy", message: "Hi, I need to refill my prescription.", timestamp: new Date() },
    { id: 3, sender: "Pharmacy", receiver: "Patient", message: "Sure, please provide your prescription details.", timestamp: new Date() },
    // Add more messages as needed
  ];

  useEffect(() => {
    // Simulating fetching messages from the backend
    setMessages(dummyData);
  }, []);

  useEffect(() => {
    setFilteredMessages(
      messages.filter(message =>
        message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.receiver.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [messages, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedMessages = () => {
    let sortableMessages = [...filteredMessages];
    if (sortConfig !== null) {
      sortableMessages.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableMessages;
  };

  const handleItemClick = (message) => {
    // Perform functionality when a message is clicked
    console.log("Clicked message:", message);
  };

  return (
    <div className="p-8 pt-4 m-3 mt-4 col-md-6">
      <h3>Chat List</h3>
      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              Sender
              <div>
                <button onClick={() => handleSort('sender')}>↑</button>
                <button onClick={() => handleSort('sender')}>↓</button>
              </div>
            </th>
            <th>
              Receiver
              <div>
                <button onClick={() => handleSort('receiver')}>↑</button>
                <button onClick={() => handleSort('receiver')}>↓</button>
              </div>
            </th>
            <th>
              Message
              <div>
                <button onClick={() => handleSort('message')}>↑</button>
                <button onClick={() => handleSort('message')}>↓</button>
              </div>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedMessages().map(message => (
            <tr key={message.id} onClick={() => handleItemClick(message)}>
              <td>{message.sender}</td>
              <td>{message.receiver}</td>
              <td>{message.message}</td>
              <td>
                <FaEllipsisV />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChatList;
