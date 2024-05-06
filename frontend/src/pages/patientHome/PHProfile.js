import React from 'react';
import { FaUser, FaMapMarker, FaPhone, FaGlobe } from 'react-icons/fa';

const PHProfile = ({ name, address, phone, website, logoUrl }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
      <div className="border pharmacy-box">
        <div className="pharmacy-box-wrapper d-flex justify-content-center align-items-center">
          <div className="pharmacy-box-img">
            <FaUser size={64} color="#007bff" /> {/* Customize size and color */}
          </div>
          <div className="pharmacy-box-content text-center">
            <h4>{name}</h4>
            <p>
              <FaMapMarker /> {address}
            </p>
            <p>
              <FaPhone /> {phone}
            </p>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHProfile;
