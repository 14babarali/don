import React from 'react';
import AdminPanelLayout from './AdminPanelLayout'; // Make sure to import your AdminPanelLayout component

// Sample medicine order data (you can replace this with actual data from your backend)
const medicineOrders = [
  {
    id: 1,
    patientName: 'John Doe',
    pharmacyName: 'ABC Pharmacy',
    paymentStatus: 'Paid',
    orderStatus: 'Processing',
    deliveryStatus: 'In Transit',
    timestamp: '2024-05-06 10:30 AM',
  },
  // Add more medicine order data as needed
];

const Order = () => {
  return (
    <div>
          <AdminPanelLayout />
          <div style={{ paddingTop: 12, marginTop: 5 }}>
              
              
             </div>
      <h1>Medicine Orders</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name / Pharmacy Name</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Delivery Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {medicineOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.patientName} / {order.pharmacyName}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.orderStatus}</td>
              <td>{order.deliveryStatus}</td>
              <td>{order.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
