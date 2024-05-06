import React from 'react';
import AdminPanelLayout from './AdminPanelLayout'; // Make sure to import your AdminPanelLayout component

// Sample conversation data (you can replace this with actual data from your backend)
const conversations = [
  {
    id: 1,
    patientName: 'John Doe',
    pharmacyName: 'ABC Pharmacy',
    timestamp: '2024-05-06 10:30 AM',
    message: 'Hello, I have a question about my medication.',
  },
  // Add more conversation data as needed
];

const ConversationList = () => {
  return (
    <div>
          <AdminPanelLayout />
          <div style={{ paddingTop: 12 ,marginTop:5}}>
              
            
      <h1>Conversation List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Pharmacy Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {conversations.map((conversation) => (
            <tr key={conversation.id}>
              <td>{conversation.patientName}</td>
              <td>{conversation.pharmacyName}</td>
              <td>{conversation.timestamp.split(' ')[1]}</td>
              <td>{conversation.timestamp.split(' ')[0]}</td>
            </tr>
          ))}
        </tbody>
              </table>
              </div>
    </div>
  );
};

export default ConversationList;
