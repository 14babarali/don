// About.js
import React, { Component } from 'react';
import Header from '../../../Header';
import axios from 'axios';
// import Banner from './Banner';


class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      contact: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('/contact', this.state)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <Header />
        {/* <Banner image={landing} title="About Us" /> */}
        <div className="container">
        

          <section className="mt-5">
            <h2>Our Commitment</h2>
            <p>
              At MedLocate, we are committed to patient safety and satisfaction. We rigorously vet and verify pharmacies in our network to ensure the authenticity of medications. Our customer support team is available 24/7 to assist patients and address their concerns.
            </p>
          </section>

          <section className="mt-5">
            <h2>Server Benefits</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <i className="fas fa-clock"></i>
                    <h5>24/7 Availability</h5>
                    <p>Access our services at any time.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <i className="fas fa-save"></i>
                    <h5>Time-Saving</h5>
                    <p>Save time in finding essential medications.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <i className="fas fa-comment"></i>
                    <h5>Real-Time Chat</h5>
                    <p>Communicate with pharmacies instantly.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <i className="fas fa-shopping-cart"></i>
                    <h5>Online Ordering</h5>
                    <p>Easily order medications online.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <i className="fas fa-hospital-user"></i>
                    <h5>In-Person Visits</h5>
                    <p>Visit pharmacies in person for added convenience.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5">
            <h2>Why Choose MedLocate?</h2>
            <ul>
              <li><i className="fas fa-check"></i> Trusted Pharmacies</li>
              <li><i className="fas fa-check"></i> Quick Medication Procurement</li>
              <li><i className="fas fa-check"></i> Secure Communication</li>
              <li><i className="fas fa-check"></i> Easy Online Ordering</li>
              <li><i className="fas fa-check"></i> In-Person Pickup Options</li>
              <li><i className="fas fa-check"></i> 24/7 Customer Support</li>
            </ul>
          </section>

          {/* (Other sections can be added as needed) */}
        </div>
      </>
    );
  }
}

export default About;