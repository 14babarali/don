import React, { Component } from 'react';
import Profile from '../../assets/Profile.png';
import './Delivery.css'; // Import a CSS file to define styles
import MedlocateData from './MedlocateData';

export default class Delivery extends Component {
  render() {
    return (
    <>
      <section className="section-p40 main-area food-top1">
        <div className="container">
          <MedlocateData />
          <div className="row mb_30">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="prof-web-design-section-heading text-center">
                <h2>Are You Looking for Your Prescribed Medicine Delivery?</h2>
                {/* <p className="roboto-font small-container">
                  “People have been ordering pizzas to their homes and now it’s time
                  to order medicines and other health care products as well”
                </p> */}
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 col-12">
              <div
                className="healthcare-img-wrapper"
                style={{
                  // padding_left: '10px',  
                  // margin: '10px',
                     
                  display: 'flex',
                 
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={Profile}
                  alt="image-14.png"
                  className="w-50"
                  style={{
                    marginLeft:'90px',
                    // paddingLeft: '30px',
                   width: '100%',    
                    height: 'auto',   
                    display: 'block', 
                  }}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 col-12">
              <div
                className="car-pool-wrapper-content healthcare-carpool-content healthcare-new-carpool"
                style={{ textAlign: 'center', margin: '0' ,marginRight:'40px', }}
              >
                <div className="d-flex mb20">
                  <div className="mr-5"></div>
                  <div style={{ textAlign: 'center' }}>
                    <h3>MedLocate</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
                      MedLocate is a beacon of hope in an era of medicine shortages,
                      offering a lifeline for patients and pharmacies. 
                      Our platform is dedicated to enhancing the healthcare experience,
                      facilitating secure communication, and efficient medicine procurement.
                      With a primary focus on providing patients a reliable means of locating essential
                       medications,
                      we streamline the process, reducing the time and effort patients invest in 
                      finding their prescribed drugs. Our
                      commitment to sourcing medicines from trusted and verified pharmacies is unwavering.
                    
                      MedLocate stands as a prominent global player in the online pharmacy business.
                       We're here to
                      bring unparalleled convenience by revolutionizing the way 
                      you search for medicine and receive deliveries,
                       all while
                      ensuring authenticity and ease in your healthcare journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
 }
}
