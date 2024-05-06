import React from 'react'

export default function Overview() {
  return (
    <><section className="mt-5 mb-4 p-4">
    <h2 className="text-center text-justify mt-2">Our Commitment</h2>
  
    <div className="row">
      <div className="col-md-6 mb-5">
        <div className="card text-center">
          <div className="card-body">
            <i className="fas fa-project-diagram fa-3x" style={{ color: "#3AAFA9" }}></i>
            <h5 className="mt-3">Med Locate</h5>
            <p className="text-justify">
              MedLocate is a comprehensive web and mobile application designed to address the pressing issue of medicine shortages and enhance access to healthcare for patients. Our project aims to simplify the process of obtaining prescribed medications by connecting patients with registered and verified pharmacies through a user-friendly platform.
            </p>
          </div>
        </div>
      </div>
  
      <div className="col-md-6 mb-5">
        <div className="card text-center">
          <div className="card-body">
            <i className="fas fa-lightbulb fa-3x" style={{ color: "#3AAFA9" }}></i>
            <h5 className="mt-3">About us</h5>
            <p className="text-justify">
              MedLocate is a revolutionary web and mobile application designed to tackle the pressing issue of medicine shortages and enhance healthcare accessibility for patients. Our project is committed to simplifying the process of obtaining prescribed medications by connecting patients with registered and verified pharmacies through a user-friendly platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <h2 className="text-center text-justify mt-4">Objective</h2>
    <div className="row">
      <div className="col-md-12 mb-5">
        <div className="card text-center">
          <div className="card-body">
            <i className="fas fa-bullseye fa-3x" style={{ color: "#3AAFA9" }}></i>
            <h5 className="mt-3">Primary Objective</h5>
            <p className="text-justify">
              The primary objective of MedLocate is to provide patients with a convenient and reliable means of locating and acquiring essential medicines. We aim to streamline the process of medicine procurement, reduce the time and effort patients expend in finding their prescribed drugs, and ensure that medicines are sourced from trusted and verified pharmacies.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 className="text-center text-justify mt-2">Scope</h2>
  
    <div className="row">
      <div className="col-md-6 mb-5">
        <div className="card text-center">
          <div className="card-body">
            <i className="fas fa-hospital-alt fa-3x" style={{ color: "#3AAFA9" }}></i>
            <h5 className="mt-3">Scope for Pharmacy</h5>
            <div className="box-list">
              <div className="box">Pharmacy registration and verification</div>
              <div className="box">Authentication</div>
              <div className="box">Related posts for medicines</div>
              <div className="box">Notification systems</div>
              <div className="box">Order placement</div>
              <div className="box">Geo-location and directions</div>
              <div className="box">Delivery services integration</div>
              <div className="box">Secure messaging and chat history</div>
              <div className="box">Spam reporting</div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="col-md-6 mb-5">
        <div className="card text-center">
          <div className="card-body">
            <i className="fas fa-user fa-3x" style={{ color: "#3AAFA9" }}></i>
            <h5 className="mt-3">Scope for Patient</h5>
            <div className="box-list">
              <div className="box">Patient registration and authentication</div>
              <div className="box">Medicine search</div>
              <div className="box">Medicine availability</div>
              <div className="box">Order placement</div>
              <div className="box">Notification systems</div>
              <div className="box">Geo-location and directions</div>
              <div className="box">Ratings and reviews</div>
              <div className="box">Pinning of pharmacies for future orders</div>
              <div className="box">Secure messaging and chat history</div>
              <div className="box">Suggested pharmacy lists</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  
   
  </section></>
  )
}
