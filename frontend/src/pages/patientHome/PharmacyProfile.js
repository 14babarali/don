import React from 'react';

const PharmacyProfile = ({ name, address, phone, website, logoUrl }) => (
  <div className="col-4 mb-4">
    <div className="card">
      <img src={logoUrl} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{address}</p>
        <p className="card-text">{phone}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  </div>
);

export default PharmacyProfile;
