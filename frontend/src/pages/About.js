//About

import React from "react";
import Layout from "./../components/Layout/Layout";
import "./../styles/About.css";
import Contactfoam from "./../components/Contactfoam";

const About = () => {
 

  return (
    <Layout title={"About us -  MedLocate"}>
    <div className="mb-8 pb-4" >
      
    <div className="row contactus  pdin-about">
      <div className="col-md-6">
        <img
          src="/images/about.png"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-md-4">
       
        <div className="text-justify mt-2">
        <h2>Contact Us</h2>
       <Contactfoam/>
      </div>
      </div>

      
    </div>
    </div>
<div className="row">
</div>
      <section className="mt-5 mb-4 p-4">
            <h2 className="text-center text-justify mt-2">Our Commitment</h2>
            <p>
              At MedLocate, we are committed to patient safety and satisfaction. We rigorously vet and verify pharmacies in our network to ensure the authenticity of medications. Our customer support team is available 24/7 to assist patients and address their concerns.
            </p>
          </section>

          <section className="mt-5 mb-4 p-4">
          <h2 className="text-center text-justify mt-2">Server Benefits</h2>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <div className="card-body">
                  <i className="fas fa-clock fa-3x" style={{ color: "#3AAFA9" }}></i>
                  <h5 className="mt-3">24/7 Availability</h5>
                  <p>Access our services at any time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <div className="card-body">
                  <i className="fas fa-save fa-3x" style={{ color: "#3AAFA9" }}></i>
                  <h5 className="mt-3">Time-Saving</h5>
                  <p>Save time in finding essential medications.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <div className="card-body">
                  <i className="fas fa-comment fa-3x" style={{ color: "#3AAFA9" }}></i>
                  <h5 className="mt-3">Real-Time Chat</h5>
                  <p>Communicate with pharmacies instantly.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <div className="card-body">
                  <i className="fas fa-shopping-cart fa-3x" style={{ color: "#3AAFA9" }}></i>
                  <h5 className="mt-3">Online Ordering</h5>
                  <p>Easily order medications online.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card text-center">
                <div className="card-body">
                  <i className="fas fa-hospital-user fa-3x" style={{ color: "#3AAFA9" }}></i>
                  <h5 className="mt-3">In-Person Visits</h5>
                  <p>Visit pharmacies in person for added convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mt-5 mb-4 p-4">
        <h2 className="text-center text-justify mt-2">Why Choose MedLocate?</h2>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-hospital fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">Trusted Pharmacies</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-medkit fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">Quick Medication Procurement</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-lock fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">Secure Communication</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-shopping-cart fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">Easy Online Ordering</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-walking fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">In-Person Pickup Options</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-headset fa-3x" style={{ color: "#3AAFA9" }}></i>
                <h5 className="mt-3">24/7 Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        
        
    </Layout>
  );
};
export default About;
