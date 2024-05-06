import React, { Component } from 'react';

export default class Requestsform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicineName: '',
      prescriptionFile: null,
      message: '',
      showMedicineInfo: false,
      chatButtonEnabled: false,
      pharmacies: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
      if (allowedTypes.includes(file.type)) {
        if (file.size <= 2 * 1024 * 1024) {
          this.setState({
            prescriptionFile: file,
            message: 'File uploaded successfully!',
          });
        } else {
          this.setState({
            message: 'File size should be less than or equal to 2 MB.',
          });
        }
      } else {
        this.setState({
          message: 'File type not allowed. Please upload a png, jpg, or pdf file.',
        });
      }
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the medicine name is provided
    if (!this.state.medicineName.trim()) {
      this.setState({
        message: 'Please fill in the medicine name.',
      });
      return;
    }

    const pharmacyResponse = await this.sendDataToServer();

    if (pharmacyResponse === 'yes') {
      // Dummy data for illustration (replace with actual data)
      const dummyData = [
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 1', logo: 'pharmacy1_logo.jpg', time: '9:00 AM', date: '2023-11-01', medicineName: this.state.medicineName },
        { pharmacyName: 'Pharmacy 2', logo: 'pharmacy2_logo.jpg', time: '10:30 AM', date: '2023-11-02', medicineName: this.state.medicineName },
      ];

      this.setState({
        showMedicineInfo: true,
        chatButtonEnabled: true,
        pharmacies: dummyData,
        message: 'Successful! Your medicine request has been sent. Thank you for using MedLocate.',
      });

      // Hide the success message after a few seconds
      setTimeout(() => {
        this.setState({
          message: '',
        });
      }, 5000);
    } else {
      this.setState({
        message: 'Pharmacy did not confirm the request. Please try again.',
        chatButtonEnabled: false,
      });
    }
  };

  sendDataToServer = () => {
    // Simulate an API call to the server
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('yes'); // Simulate a positive response, replace with actual logic
      }, 2000);
    });
  };

  handleChatButtonClick = () => {
    // Add logic to navigate to the chat page or display the chat interface
    console.log('Chat button clicked!');
    // Example: Redirect to a chat page
    // this.props.history.push('/chat');
  };

  render() {
    return (
      <>
        <section className="home-height-half medicine-delivery-bg-img main-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="prof-web-home-title">
                  <h1>MedLocate - Bridging the Gap Between Patients and Pharmacies</h1>
                  <h3>
                    <i>Because Health Comes First</i>
                  </h3>
                  <p>
                    Now home delivery is not limited to food! It is time we received
                    essential medicines and healthcare products at our doorstep
                    leveraging medicine delivery apps. Having the right medicines
                    handy at the right time can save lives.
                  </p>
                  <p className="pt-2">
                    <em>People need timely medication, what are you waiting for?</em>
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 roboto-form">
                <div className="free-quote-form box-shadow-white">
                  <div className="free-quote-heading">
                    <h3 style={{ color: '#17252A'}}>Medicine Request</h3>
                  </div>
                  <div className="free-quote-body">
                    <div
                      role="form"
                      className="wpcf7"
                      id="wpcf7-f6320-p2167-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div className="screen-reader-response" aria-live="polite" />
                      <form
                        action=""
                        method="get"
                        className="wpcf7-form"
                        noValidate="novalidate"
                        onSubmit={this.handleSubmit}
                      >
                        <div style={{ display: "none" }}>
                          <input type="hidden" name="_wpcf7" defaultValue={6320} />
                          <input
                            type="hidden"
                            name="_wpcf7_version"
                            defaultValue="5.1.9"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_locale"
                            defaultValue="en_US"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_unit_tag"
                            defaultValue="wpcf7-f6320-p2167-o1"
                          />
                          <input
                            type="hidden"
                            name="_wpcf7_container_post"
                            defaultValue={2167}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Medicine Name</label>
                          <br />
                          <span className="wpcf7-form-control-wrap name">
                            <input
                              type="text"
                              name="medicineName"
                              value={this.state.medicineName}
                              onChange={this.handleInputChange}
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </span>
                        </div>
                        <div className="form-group">
                          <label htmlFor="file">Upload prescription</label>
                          <br />
                          <span className="wpcf7-form-control-wrap email">
                            <input
                              type="file"
                              name="file"
                              onChange={this.handleFileChange}
                              size={40}
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </span>
                        </div>

                        <p>
                          <input
                            type="submit"
                            value="Submit"
                            className="wpcf7-form-control wpcf7-submit btn submit-button btn-block"
                          />
                        </p>
                        <div
                          className="wpcf7-response-output wpcf7-display-none"
                          aria-hidden="true"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 {/* Display success or error message */}
 {this.state.message && (
          <div className={`message ${this.state.message.includes('Successful') ? 'success' : 'error'}`}>
            {this.state.message}
          </div>
        )}
        {/* Display medicine info section if showMedicineInfo is true */}
        {this.state.showMedicineInfo && (
          <div className="medicine-info-section">
            <h2>Medicine Information</h2>
            <table className="pharmacy-info-table">
              <thead>
                <tr>
                  <th>Pharmacy</th>
                  <th>Logo</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Medicine</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pharmacies.map((pharmacy, index) => (
                  <tr key={index}>
                    <td>{pharmacy.pharmacyName}</td>
                    <td>
                      <img src={pharmacy.logo} alt={`Logo of ${pharmacy.pharmacyName}`} />
                    </td>
                    <td>{pharmacy.time}</td>
                    <td>{pharmacy.date}</td>
                    <td>{pharmacy.medicineName}</td>
                    <td>
                      <button
                        className="chat-button"
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
