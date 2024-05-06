import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedlocateData = () => {
  const [state, setState] = useState({
    pharmaciesCount: 10,
    patientsCount: 14,
    ordersCount: 0,
    citiesCount: 5,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pharmacyResponse = await axios.get('http://localhost:8080/api/pharmacies/count');
        const userResponse = await axios.get('http://localhost:8080/api/users/count');
        const cityResponse = await axios.get('http://localhost:8080/api/cities/count');

        setState({
          pharmaciesCount: pharmacyResponse.data.count,
          patientsCount: userResponse.data.count,
          ordersCount: 0, // Assuming the API for orders is not working as expected
          citiesCount: 0,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section-p40 main-area food-top1">
      <div className="row mb_90">
        <div className="col-lg-10 offset-lg-1">
          <div className="prof-web-success-points" style={{ background: '#3AAFA9', color: '#FFFFFF' }}>
            <div className="d-flex">
              <div className="text-center flex-grow-1 border-right">
                <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                  {state.pharmaciesCount}
                </h2>
                <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>
                  Number of Pharmacies
                </p>
              </div>
              <div className="text-center flex-grow-1 border-right">
                <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                  {state.patientsCount}
                </h2>
                <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>Patient</p>
              </div>
              <div className="text-center flex-grow-1 border-right">
                <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                  {state.ordersCount}
                </h2>
                <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>Order</p>
              </div>
              <div className="text-center flex-grow-1">
                <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                  {state.citiesCount}
                </h2>
                <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>
                  Number of City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedlocateData;
