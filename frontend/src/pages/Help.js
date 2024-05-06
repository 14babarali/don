import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/Help.css";


export default function Help() {
  return (
    <Layout title="MedLocte - Help">
    <>

    <div className="help-container">
      <h2>MedLocate Help Center</h2>
      <p className='txthelp'>
        Welcome to MedLocate's Help Center. If you have any questions or issues, please feel free to
        explore the information below or contact our support team.
      </p>

      <div className="section">
        <h3>Frequently Asked Questions (FAQs)</h3>
        <p className='txthelp'>
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
        <p className='txthelp'>
          If you need further assistance, please contact our support team. We are here to help you!
        </p>
        <p className='txthelp'>Email: support@medlocate.com</p>
        <p className='txthelp'>Phone: +1 (555) 123-4567</p>
      </div>

      <div className="section">
        <h3>Feedback</h3>
        <p className='txthelp'>
          We value your feedback! If you have any suggestions or feedback on how we can improve
          MedLocate, please let us know.
        </p>
        <p className='txthelp'>Email: feedback@medlocate.com</p>
      </div>
    </div>
   </>
    </Layout>
  )
}
