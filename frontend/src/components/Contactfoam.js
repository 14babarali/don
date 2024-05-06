import React, { useState } from 'react';
import axios from 'axios';

export default function Contactfoam() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/contact', formData)
          .then(response => {
            console.log(response.data);
            // Handle success (clear form, show message, etc.)
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
      };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-control"
        required onChange={handleChange} value={formData.name}
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        required onChange={handleChange} value={formData.email}
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        className="form-control"
        rows="4"
        required  onChange={handleChange} value={formData.message}>
      </textarea>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
    
    </>
  )
}
