import React, { Component } from 'react';

class MedicineRequestForm extends Component {
  constructor() {
    super();
    this.state = {
      medicineName: '',
      submitted: false,
      pharmaciesReceivedRequests: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { medicineName, pharmaciesReceivedRequests } = this.state;
    this.setState({
      submitted: true,
      pharmaciesReceivedRequests: [...pharmaciesReceivedRequests, { name: 'Pharmacy A', medicineName }],
      medicineName: '',
    });
  };

  render() {
    const { medicineName, submitted, pharmaciesReceivedRequests } = this.state;

    return (
      <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 roboto-form">
        <div className="free-quote-form box-shadow-white">
          <div className="free-quote-heading">
            <h3 style={{ color: '#3AAFA9' }}>Medicine Request</h3>
          </div>
          <div className="free-quote-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="medicineName">Medicine Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="medicineName"
                  name="medicineName"
                  required
                  value={medicineName}
                  onChange={(e) => this.setState({ medicineName: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Request
              </button>
            </form>

            {submitted && (
  <div className="alert alert-success">
    Your request for "{medicineName}" has been sent to the pharmacies. We will get back to you shortly.
  </div>
)}
          </div>
        </div>
      </div>
    );
  }
}

class PharmacyRequestList extends Component {
  render() {
    const { pharmaciesReceivedRequests } = this.props;

    return (
      <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 roboto-form">
        <div className="free-quote-form box-shadow-white">
          <div className="free-quote-heading">
            <h3 style={{ color: '#3AAFA9' }}>Pharmacies with Requests</h3>
          </div>
          <div className="free-quote-body">
            <ul>
              {pharmaciesReceivedRequests.map((pharmacyRequest, index) => (
                <li key={index}>
                  Pharmacy: {pharmacyRequest.name}, Medicine Request: {pharmacyRequest.medicineName}
                </li>
              ))}
            </ul>
            {/* Add a chat button for each pharmacy here */}
          </div>
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pharmaciesReceivedRequests: [],
    };
  }

  handlePharmacyResponse = (pharmacyName) => {
    // Handle pharmacy response and enable chat
    // You can implement this functionality
    // For example, updating the state to enable chat with the specific pharmacy
  };

  render() {
    const { pharmaciesReceivedRequests } = this.state;

    return (
      <div>
        <div className="row">
          <MedicineRequestForm />
          <PharmacyRequestList pharmaciesReceivedRequests={pharmaciesReceivedRequests} />
        </div>
      </div>
    );
  }
}
