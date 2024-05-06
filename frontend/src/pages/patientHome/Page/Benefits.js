import React, { Component } from 'react'
//import Asset from './Asset'
import icon1 from'../../assets/icon1.png';
import icon2 from'../../assets/icon2.png';

export default class Benefits extends Component {
    render(){
        return(
            <>
           
       
            
            <section className="medician-all-section section-p60">
              <div className="container">
                <div className="row mb_30">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="prof-web-design-section-heading text-center">
                      <h2>What Are The Benefits Of A MedLocate</h2>
                      <p className="roboto-font small-container">
                      MedLocate provides patients with a convenient and reliable solution
                       to medicine procurement. Our platform connects patients with trusted and 
                       verified pharmacies, reducing the time and effort required to locate essential medicines.
                        We offer secure communication channels that
                       ensure the privacy and confidentiality of all parties involved in the procurement process
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
                          src={icon1}
                         className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
                       
                       />
                       
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        Affordability
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Provide safe, and reliable medicines at affordable prices
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
                          src={icon1}
                          className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
  />
                    
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        Quick Order
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Upload prescription and order for medicines right away
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
                           src={icon1}
                          className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
                          />
                     
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        OTC Medicines
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Easily order OTC(Over The Counter) medicines, i.e. medicines that
                        do not need any prescription
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
                         src={icon1}
                          className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
                       
                       />
                        
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        A-Z Medicines
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Availability of almost every kind of medicines listed under proper
                        categories
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
                         src={icon1}
                          className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
                       
                       />
                       
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        Drug Details
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Get to know about all the medicines with easy to access detailed
                        drug information
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb_40">
                    <div className="white-label-box text-center">
                      <div className="white-label-img-box">
                        <img
 src={icon1}
className="mb_20 img-fluid"
                          alt="White Label Image"
                          title="White Label Image"
                       
                       />
                       
                      </div>
                      <h3 className="white-label-box-heading f-size-17 f_w_600 text-dark-gray roboto-font">
                        Reminders
                      </h3>
                      <p className="mb_0 f-size-14 text-light-gray roboto-font">
                        Regular refill reminders so people don’t fall short of medicines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            
          
          </>
          
        )
    }
}
