import React from 'react';
import './Testimoniat.css'; // Import your CSS file for styling

const Testimonial = ({ name, position, image, text }) => {
  return (
    <div className="testimonial-card">
    
      <img src={image} alt={`${name}'s profile`} className="testimonial-image" />
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-position">{position}</p>
        <p className="testimonial-text">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
