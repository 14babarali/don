import React, { Component } from 'react';
import Profile from '../../assets/Profile.png'
import "./Delivery.css"
// Import a CSS file to define styles
import MedlocateData from './MedlocateData';

export default class Delivery extends Component {
  render() {
    return (
      <>

        <MedlocateData />


      </>
    );
  }
}


// import React, { Component } from 'react';
// import PatientDelivery from './PatientDelivery.js';
// import PharmacyDelivery from './PharmacyDelivery.js';
// import AdminDelivery from './AdminDelivery.js';

// export default class Delivery extends Component {
//   render() {
//     // Assuming userType is passed as a prop or fetched from some context
//     const { userType } = this.props;

//     return (
//       <div>
//         {userType === 'patient' && <PatientDelivery />}
//         {userType === 'pharmacy' && <PharmacyDelivery />}
//         {userType === 'admin' && <AdminDelivery />}
//       </div>
//     );
//   }
// }


