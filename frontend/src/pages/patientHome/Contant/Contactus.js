// ContactUs.js
import axios from 'axios';
import React, { Component } from 'react';
import Header from '../../../Header';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      contact: '',
      message: ''
    };

    // Binding the methods to the instance
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

        <div className="contact-us-container">
          <section className="contact-section">
            <h2>Contact Us</h2>
            <p>
              Have a question or need assistance? Reach out to us through the
              options below.
            </p>

            {/* Contact Form */}
            <section className="mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h1>About MedLocate</h1>
                  <p>
                    MedLocate is more than just a platform; it's a lifeline for patients seeking essential medications. Our mission is to reduce the time spent searching for medicines, making it easier for patients to access their prescribed drugs.
                  </p>
                  <p>
                    When a patient submits a medication request through MedLocate, we swiftly connect them with multiple pharmacies. If the medication is available at any of these pharmacies, they accept the request, and the patient is notified. Real-time chat enables seamless communication between the patient and the pharmacy, making ordering and pickup options convenient.
                  </p>
                  <p>
                    MedLocate's goal is to bridge the gap between pharmacies and patients, ensuring quick and reliable access to essential medications. Patients can choose to order medicines online or visit a pharmacy in person, saving valuable time and simplifying the healthcare experience.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2>Contact Us</h2>
                  <form onSubmit={this.handleSubmit} id="commentForm">
                    <div className="form-group">
                   
                      <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                      
                      <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                      
                      <input type="tel" name="contact" id="contact" className="form-control" placeholder="Your Contact Number" value={this.state.contact} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                    
                      <textarea name="message" id="message" rows="5" className="form-control" placeholder="Your Message" value={this.state.message} onChange={this.handleInputChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Submit</button>
                  </form>
                </div>
              </div>
            </section>
          </section>

          <section className="customer-support-section">
            <h3>Customer Support</h3>
            <p>
              If you require customer support, please email us at{' '}
              <a href="mailto:support@medlocate.com">support@medlocate.com</a>.
            </p>
          </section>

          <section className="business-inquiries-section">
            <h3>Business Inquiries</h3>
            <p>
              For business-related inquiries, please contact us at{' '}
              <a href="mailto:business@medlocate.com">business@medlocate.com</a>.
            </p>
          </section>

          <section className="connect-with-us-section">
            <h3>Connect With Us</h3>
            <p>Stay connected with us on social media for updates and news.</p>

            {/* Social Media Icons and Links */}
            <div className="social-media-icons">
              <a href="https://facebook.com/medlocate" target="_blank" rel="noopener noreferrer">
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </section>

          <section className="feedback-section">
            <h3>Feedback</h3>
            <p>
              Your feedback is important to us. Please share your thoughts by
              emailing us at{' '}
              <a href="mailto:feedback@medlocate.com">feedback@medlocate.com</a>.
            </p>
          </section>

          <section className="additional-section">
            <h3>Additional Section</h3>
            <p>This is an additional section. Customize it based on your requirements.</p>
          </section>

          <section className="another-section">
            <h3>Another Section</h3>
            <p>Feel free to add more sections to suit your website's content.</p>
          </section>
        </div>
      </>
    );
  }
}

export default ContactUs;
