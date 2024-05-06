import React from 'react';
import Testimonial from './Testimonial'; // Adjust the path based on your project structure

const Feedback = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Company ABC',
      image: 'john-doe.jpg', // Replace with the actual image path
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'John Doe',
      position: 'CEO, Company ABC',
      image: 'john-doe.jpg', // Replace with the actual image path
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, {
      name: 'John Doe',
      position: 'CEO, Company ABC',
      image: 'john-doe.jpg', // Replace with the actual image path
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-page">
   
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default Feedback;
