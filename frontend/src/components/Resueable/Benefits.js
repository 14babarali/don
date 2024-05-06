import React from 'react'

export default function Benefits() {
  return (
    <><section className="mt-5 mb-4 p-4">
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
    </section></>
  )
}
