import React, {  useState } from "react";
import axios from 'axios';
import { useAuth } from "../../context/auth";
import './Homepage.css';


import { Toaster, toast } from 'react-hot-toast';

const Form = () => {

    const [medicineName, setMedicineName] = useState('');
    const [prescription, setPrescription] = useState(null);
    const [auth, setAuth] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
 
         if (!auth.token || !auth.user) {
    toast.error("You must be logged in to submit this form.");
    return;
 }
        if (!medicineName.trim()) {
            toast.error('Please enter the medicine name.');
            return;
        }

        if (prescription) {
            const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
            if (!allowedTypes.includes(prescription.type)) {
                toast.error('Prescription file type not allowed. Please upload a png, jpg, or pdf file.');
                return;
            }
            if (prescription.size > 2 * 1024 * 1024) {
                toast.error('Prescription file size should be less than or equal to 2 MB.');
                return;
            }
        }
 
        const formData = new FormData();
        formData.append('medicineName', medicineName);
        formData.append('prescription', prescription);
        formData.append('name', auth.user.name);
      formData.append('email', auth.user.email);
       formData.user_id = auth.user.id;

        try {
          
            const res = await axios.post('http://localhost:8080/api/v1/submitform',
             formData, {
            
      
    });

            if (res.data.success) {
                const randomPharmacistId = Math.floor(Math.random() * 2); // Generate a random ID
                toast.success(` successfully!
                 sent your medicine request to Pharmacist ${randomPharmacistId}.`);
 
                    toast.success(res.data && res.data.message);
                setMedicineName('');
                setPrescription(null);
    
       
            } else {
                toast.error('An error occurred ');
            }
        } catch (error) {
            toast.error('An error occurred while submitting the Submiting.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="medicineName">Medicine Name:</label>
                <input type="text" id="medicineName" value={medicineName}
                    onChange={
                        (e) => setMedicineName(e.target.value)
                    } className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="prescription">Prescription:</label>
                <input type="file" id="prescription" onChange={
                    (e) => setPrescription(e.target.files[0])
                } className="form-control-file" />
            </div>
            <h3>  Name : {auth?.user?.name}</h3>
              <h3> Email : {auth?.user?.email}</h3>
                           <h3> Phone : {auth?.user?.phone}</h3>
            <button type="submit" className="btn submit-button btn-block"
                style={{
                    color: "#ffff", backgroundColor: "#17252A"
                }}>Submit</button>
            <Toaster />
            
        </form>
    );
};

export default Form;



// const Form = () => {

//     const [medicineName, setMedicineName] = useState('');
//     const [prescription, setPrescription] = useState(null);
//     const [auth, setAuth] = useAuth();


//     const handleSubmit = async (e) => {
//         e.preventDefault();
 
//          if (!auth.token || !auth.user) {
//     toast.error("You must be logged in to submit this form.");
//     return;
//  }
//         if (!medicineName.trim()) {
//             toast.error('Please enter the medicine name.');
//             return;
//         }

//         if (prescription) {
//             const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
//             if (!allowedTypes.includes(prescription.type)) {
//                 toast.error('Prescription file type not allowed. Please upload a png, jpg, or pdf file.');
//                 return;
//             }
//             if (prescription.size > 2 * 1024 * 1024) {
//                 toast.error('Prescription file size should be less than or equal to 2 MB.');
//                 return;
//             }
//         }
 

//         const formData = new FormData();
//         formData.append('medicineName', medicineName);
//         formData.append('prescription', prescription);
//         formData.user_id = auth.user.id;
//         try {
//             const authToken = localStorage.getItem('authToken');
//             console.log(localStorage.getItem('authToken')); // Should print the authToken if it exists

//             // const res = await axios.post('http://localhost:8080/api/v1/submitform', formData);
//   const res = await axios.post('http://localhost:8080/api/v1/submitform', formData, {
            
//        headers: {
//         'Authorization': `Bearer ${auth.token}`, 
//       },
//     });

//             if (res.data.success) {
//                 const randomPharmacistId = Math.floor(Math.random() * 2); // Generate a random ID
//                 toast.success(` successfully!
//                  sent your medicine request to Pharmacist ${randomPharmacistId}.`);
 
//                     toast.success(res.data && res.data.message);
//                 setMedicineName('');
//                 setPrescription(null);
    
       
//             } else {
//                 toast.error('An error occurred ');
//             }
//         } catch (error) {
//             toast.error('An error occurred while submitting the Submiting.');
//         }
//     };


//     return (
//         <form onSubmit={handleSubmit} className="form">
//             <div className="form-group">
//                 <label htmlFor="medicineName">Medicine Name:</label>
//                 <input type="text" id="medicineName" value={medicineName}
//                     onChange={
//                         (e) => setMedicineName(e.target.value)
//                     } className="form-control" />
//             </div>

//             <div className="form-group">
//                 <label htmlFor="prescription">Prescription:</label>
//                 <input type="file" id="prescription" onChange={
//                     (e) => setPrescription(e.target.files[0])
//                 } className="form-control-file" />
//             </div>
//             <h3> User Name : {auth?.user?.name}</h3>
//               <h3>  Email : {auth?.user?.email}</h3>
               
//             <button type="submit" className="btn submit-button btn-block"
//                 style={{
//                     color: "#ffff", backgroundColor: "#17252A"
//                 }}>Submit</button>
//             <Toaster />
            
//         </form>
//     );
// };

// export default Form;







// import React, { Component } from 'react';
// import axios from 'axios';
// // import toast from 'sweetalert';
// import { withRouter } from 'react-router-dom';
// // // import toast from "react-hot-toast";

// import { Toaster, toast } from 'react-hot-toast';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//           token: '',
//              id: '',
//       medicineName: '',
//       prescription: null,
//       auth: JSON.parse(localStorage.getItem('auth')) || {},
//     };
//   }
//  componentDidMount = () => {
//     let token = localStorage.getItem('token');
//    if (!token) {
//       toast("Error",  "unauthorized");
  
//       // this.props.history.push('/login');
//       // this.props.navigate("/login");
//     } else {
//       this.setState({ token: token }, () => {
   
//       });
//     }
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { medicineName, prescription } = this.state;

//     // if (!auth.token || !auth.user) {
//     //   toast("Error", "You must be logged in to submit this form.", "error");
//     //   return;
//     // }

//     if (!medicineName.trim()) {
//       toast("Error", "Please enter the medicine name.", "error");
//       return;
//     }

//     if (prescription) {
//       const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
//       if (!allowedTypes.includes(prescription.type)) {
      
//         toast("Error", "Prescription file type not allowed. Please upload a png, jpg, or pdf file.", "error");
//         return;
//       }
//       if (prescription.size > 2 * 1024 * 1024) {
//         toast("Error", "Prescription file size should be less than or equal to 2 MB.", "error");
//         return;
//       }
//     }

//     const formData = new FormData();
//     formData.append('medicineName', medicineName);
//     formData.append('prescription', prescription);
//     // formData.append('user_id', auth.user.id);

//     try {
//       const res = await axios.post('http://localhost:8080/api/v1/submitform', formData, {
//        headers: {
//     'Authorization': `Bearer ${this.state.token}`,
//     'Content-Type': 'multipart/form-data',
//   },
// });
//       if (res.data.success) {
//         const randomPharmacistId = Math.floor(Math.random() * 2); // Generate a random ID
//         toast("Success", `Submitted successfully! Sent your medicine request to Pharmacist ${randomPharmacistId}.`, "success");
//         this.setState({ medicineName: '', prescription: null });
//       } else {
//         toast("Error", "An error occurred.", "error");
//       }
//     } catch (error) {
//       toast("Error", "An error occurred while submitting the form.", "error");
//     }
//   };

//   handleInputChange = (e) => {
//     if (e.target.name === 'prescription') {
//       this.setState({ prescription: e.target.files[0] });
//     } else {
//       this.setState({ [e.target.name]: e.target.value });
//     }
//   };

//   render() {
//     const { medicineName } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className="form">
//         <div className="form-group">
//           <label htmlFor="medicineName">Medicine Name:</label>
//           <input
//             type="text"
//             id="medicineName"
//             name="medicineName"
//             value={medicineName}
//             onChange={this.handleInputChange}
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="prescription">Prescription:</label>
//           <input
//             type="file"
//             id="prescription"
//             name="prescription"
//             onChange={this.handleInputChange}
//             className="form-control-file"
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn submit-button btn-block"
//           style={{ color: "#ffff", backgroundColor: "#17252A" }}
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;


