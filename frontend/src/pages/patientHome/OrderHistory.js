import React, { Component } from 'react';
class OrderHistory extends Component {
    constructor(props) {
      super(props);
      // Initialize the state with dummy order data (you can replace this with real data)
      this.state = {
        orders: [
          { id: 1, date: '2023-11-01', total: 100.0 },
          { id: 2, date: '2023-11-05', total: 75.5 },
          // Add more order objects here
        ],
      };
    }
  
    render() {
      return (
        <div>
          <h2>Order History</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default OrderHistory;
  