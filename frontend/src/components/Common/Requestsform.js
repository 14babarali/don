import React, { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import Form from './Form';


class Requestsform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicineName: '',
      prescriptionFile: null,
      message: '',
      showMedicineInfo: false,
      chatButtonEnabled: false,
      pharmacies: [],
      backendMessage: '',
    };
  }

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
  //     if (allowedTypes.includes(file.type)) {
  //       if (file.size <= 2 * 1024 * 1024) {
  //         this.setState({
  //           prescriptionFile: file,
  //           message: 'File uploaded successfully!',
  //         });
  //       } else {
  //         this.setState({
  //           message: 'File size should be less than or equal to 2 MB.',
  //         });
  //       }
  //     } else {
  //       this.setState({
  //         message: 'File type not allowed. Please upload a png, jpg, or pdf file.',
  //       });
  //     }
  //   }
  // };
  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // const userId = this.props.userId;
  //   const formData = new FormData();
  //   formData.append('medicineName', this.state.medicineName);
  //   formData.append('prescription', this.state.prescriptionFile);
  //   // formData.append('userId', userId);
  //   // Check if medicineName is empty
  //   if (!this.state.medicineName.trim()) {
  //     toast.error('Please fill in the medicine name.');
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append('medicineName', this.state.medicineName);
  //     formData.append('prescription', this.state.prescriptionFile); // Adjusted name to match server expectation
  //     // formData.append('userId', this.props.userId); // Assuming userId is passed as a prop

  //     const response = await axios.post('http://localhost:8080/submitform', formData);
  //     // console.log(`http://localhost:8080/submitfor`)
  //     if (response.data.success) {
  //       const dummyData = [
  //         { pharmacyName: 'Pharmacy 1', time: '11:00 AM', date: '2024-29-02', medicineName: this.state.medicineName },
  //         { pharmacyName: 'Pharmacy 2', time: '11:00 AM', date: '2024-29-02', medicineName: this.state.medicineName },
  //         // ... (other dummy data)
  //       ];

  //       this.setState({
  //         showMedicineInfo: true,
  //         chatButtonEnabled: true,
  //         pharmacies: dummyData,
  //         backendMessage: response.data.message,
  //       });

  //       toast.success(response.data.message, {
  //         duration: 5000,
  //       });
  //     } else {
  //       this.setState({
  //         backendMessage: response.data.message,
  //         chatButtonEnabled: false,
  //       });

  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);

  //     toast.error('Something went wrong. Please try again.');
  //   }
  // };


  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Check if medicineName is empty
  //   if (!this.state.medicineName.trim()) {
  //     toast.error('Please fill in the medicine name.');
  //     return;
  //   }

  //   try {
  //     const formData = new FormData();
  //     formData.append('medicineName', this.state.medicineName);
  //     formData.append('prescriptionFile', this.state.prescriptionFile);

  //     const response = await axios.post('http://localhost:8080/submitform', formData);
  //     console.log(`http://localhost:8080/submitfor`)
  //     if (response.data.success) {
  //       const dummyData = [
  //         { pharmacyName: 'Pharmacy 1', time: '11:00 AM', date: '2024-29-02', medicineName: this.state.medicineName },
  //         { pharmacyName: 'Pharmacy 2', time: '11:00 AM', date: '2024-29-02', medicineName: this.state.medicineName },
  //         // ... (other dummy data)
  //       ];

  //       this.setState({
  //         showMedicineInfo: true,
  //         chatButtonEnabled: true,
  //         pharmacies: dummyData,
  //         backendMessage: response.data.message,
  //       });

  //       toast.success(response.data.message, {
  //         duration: 5000,
  //       });
  //     } else {
  //       this.setState({
  //         backendMessage: response.data.message,
  //         chatButtonEnabled: false,
  //       });

  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);

  //     toast.error('Something went wrong. Please try again.');
  //   }
  // };

  // handleChatButtonClick = () => {
  //   console.log('Chat button clicked!');
  //   // Example: Redirect to a chat page
  //   this.props.history.push('/chat');
  // };

  render() {
    return (
      <>
        <Toaster />

        <section className="header ">

          <div className=" slider">
            <div className="container">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 roboto-form">


                <div className="free-quote-body">
                  <Form />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Display success or error message */}
        {this.state.backendMessage && (
          <div className={`alert ${this.state.backendMessage.includes('Successful') ? 'alert-success' : 'alert-danger'}`}>
            {this.state.backendMessage}
          </div>
        )}

        {/* Display medicine info section if showMedicineInfo is true */}
        {this.state.showMedicineInfo && (
          <div className="medicine-info-section " style={{ marginRight: '20px' }}>
            <h2>Medicine Information</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Pharmacy</th>

                  <th>Time</th>
                  <th>Date</th>
                  <th>Medicine</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody >
                {this.state.pharmacies.map((pharmacy, index) => (
                  <tr key={index}>
                    <td>{pharmacy.pharmacyName}</td>

                    <td>{pharmacy.time}</td>
                    <td>{pharmacy.date}</td>
                    <td>{pharmacy.medicineName}</td>
                    <td>
                      <button
                        className="btn btn-primary" style={{ backgroundColor: "#3AAFA9" }}
                        onClick={this.handleChatButtonClick}
                        disabled={!this.state.chatButtonEnabled}
                      >
                        Start Chat
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </>
    );
  }
}

export default Requestsform;
