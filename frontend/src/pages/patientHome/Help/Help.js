// Help.js

import React from 'react';
import Header from "../../../Header";
import './Help.css'; // Import your Help styles here

const Help = () => {
  return (
   <>
   
    <div className="help-container">
      <h2>MedLocate Help Center</h2>
      <p>
        Welcome to MedLocate's Help Center. If you have any questions or issues, please feel free to
        explore the information below or contact our support team.
      </p>

      <div className="section">
        <h3>Frequently Asked Questions (FAQs)</h3>
        <p>
          Check out our FAQs for answers to common questions about using MedLocate and its features.
        </p>
        <ul>
          <li>How to place an order?</li>
          <li>Can I schedule a visit to a pharmacy?</li>
          {/* Add more FAQ items as needed */}
        </ul>
      </div>

      <div className="section">
        <h3>Contact Support</h3>
        <p>
          If you need further assistance, please contact our support team. We are here to help you!
        </p>
        <p>Email: support@medlocate.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>

      <div className="section">
        <h3>Feedback</h3>
        <p>
          We value your feedback! If you have any suggestions or feedback on how we can improve
          MedLocate, please let us know.
        </p>
        <p>Email: feedback@medlocate.com</p>
      </div>
    </div>
   </>
  );
};

export default Help;
