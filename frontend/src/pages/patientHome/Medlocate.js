import React, { Component } from 'react'
// import cont from"../Asset/cont.png"
// import Banner from './Banner';
import './medlocote.css';
import con2 from '../assets/con2.png';
// import Header from '../Header';
export default class Medlocate extends Component {
  render() {
    return (
        <>
        {/* <Header/> */}
        {/* <Banner/> */}
       
       
        <div className="medcontainer">
          <div className="l-column">
            <div className="l-content">
              <img src={con2}  
                       className="w-100" 
              />
            </div>
          </div>
          <div className="r-column">
            <div className="r-content">
              <h1>Connect With Your Us!</h1>
              
              <div className="input-field">
                <input type="text" placeholder="Your Name" />
              </div>
          
              <div className="input-field">
                <input type="text" placeholder="Phone Number" />
              </div>
       
              <div className="input-field">
                <input type="text" placeholder="Email" />
              </div>
       
              <div className="input-field">
                <textarea placeholder="Detail" defaultValue={""} />
              </div>
              <button className="get-consultation-button">Send</button>
            </div>
          </div>
        </div>
      </>
      
    )
  }
}
