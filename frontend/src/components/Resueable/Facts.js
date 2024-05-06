import React from 'react'
import { FaHome, FaUserAlt, FaSmile, FaTable } from 'react-icons/fa'

export default function Facts() {
  return (
    <>
      <div id="fun-facts" className="fun-facts ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <FaHome
                  style={{
                    color: '#17252A',
                    fontSize: '2em',
                    margin: '10px',
                  }}
                />
                <div className="content">
                  <span className="counter" style={{ color: '#17252A' }}>
                    38
                  </span>
                  <p style={{ color: '#17252A' }}>Number Of Pharmacies</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <FaUserAlt
                  style={{
                    color: '#17252A',
                    fontSize: '2em',
                    margin: '10px',
                  }}
                />
                <div className="content">
                  <span className="counter" style={{ color: '#17252A' }}>
                    57
                  </span>
                  <p style={{ color: '#17252A' }}>Number of Patients</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <FaSmile
                  style={{
                    color: '#17252A',
                    fontSize: '2em',
                    margin: '10px',
                  }}
                />
                <div className="content">
                  <span className="counter" style={{ color: '#17252A' }}>
                    79
                  </span>
                  <p style={{ color: '#17252A' }}>Number Order</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <FaTable
                  style={{
                    color: '#17252A',
                    fontSize: '2em',
                    margin: '10px',
                  }}
                />
                <div className="content">
                  <span className="counter" style={{ color: '#17252A' }}>
                    32
                  </span>
                  <p style={{ color: '#17252A' }}>Number Of Cities</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
