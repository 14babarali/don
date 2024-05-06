import React from 'react';
import AdminPanelLayout from './AdminPanelLayout'; // Make sure to import your AdminPanelLayout component

// Sample medicine Contact data (you can replace this with actual data from your backend)
const medicineContacts = [
  {
    id: 1,
    patientName: 'John Doe',
    pharmacyName: 'ABC Pharmacy',
    paymentStatus: 'Paid',
    ContactStatus: 'Processing',
    deliveryStatus: 'In Transit',
    timestamp: '2024-05-06 10:30 AM',
  },
  // Add more medicine Contact data as needed
];

const Contact = () => {
  return (
    <div>
    
          <AdminPanelLayout />
          <div style={{ paddingTop: 12, marginTop: 5 }}>
              

              
             </div>
      <h1>Medicine Contacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name / Pharmacy Name</th>
            <th>Payment Status</th>
            <th>Contact Status</th>
            <th>Delivery Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {medicineContacts.map((Contact) => (
            <tr key={Contact.id}>
              <td>{Contact.patientName} / {Contact.pharmacyName}</td>
              <td>{Contact.paymentStatus}</td>
              <td>{Contact.ContactStatus}</td>
              <td>{Contact.deliveryStatus}</td>
              <td>{Contact.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
