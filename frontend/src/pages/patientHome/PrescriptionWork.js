import React, { Component } from 'react'
// about.png
import about from '../assets/about.png';
export default class PrescriptionWork extends Component {
    render(){
        return(
            <>
           
            
           
            <section className="main-area gray-bg medecine-del-develop">
              <div className="container">
                <div className="row mb_30">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="prof-web-design-section-heading text-center">
                      <h2>ABOUT US</h2>
                      <p className="roboto-fon small-container">
                      MedLocate is one of the online plafrom seacrhing Medicine and Medicine Delivery   which is helping Pharmacy
                        Businesses to meet health care needs and requirements of millions
                        of people by providing genuine and high quality medicines and
                        health care products without any hassles but maximum benefits.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row food-app-work">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center p5per_r">
                    <div className="on-demand-food-app-work-img">
                      <img src={about}
                        className="w-100"
                        title=""
                        alt="medicin-img"
                      />
                      
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="on-demand-app-work-wrapper">
                      <div className="d-flex on-demand-app-work-step roboto-font">
                        <div className="mr-3 on-demand-app-step healthcare-look-ico">
                          <img
                            title=""
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="medicin-develop-img"
                          />
                          <noscript>
                            &lt;img title="" alt="medicin-develop-img"
                            data-src="https://www.enukesoftware.com/wp-content/uploads/medician-craft-icon1.png"
                            class="lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="&gt;&lt;noscript&gt;&lt;img
                            title=""
                            src="https://www.enukesoftware.com/wp-content/uploads/medician-craft-icon1.png"
                            alt="medicin-develop-img"&gt;
                          </noscript>
                        </div>
                        <div className="on-demans-app-rigt">
                          <h4>Mission</h4>
                          <p>
                            <b>MedLocate</b> is on a mission that every person around the
                            globe should be accessible to high-quality and effective
                            medical care at all times 
                          </p>
                        </div>
                      </div>
                      <div className="d-flex on-demand-app-work-step roboto-font">
                        <div className="mr-3 on-demand-app-step healthcare-look-ico">
                          <img
                            title=""
                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                            alt="medicin-develop-img"
                            data-lazy-src="https://www.enukesoftware.com/wp-content/uploads/medician-craft-icon2.png"
                          />
                          <noscript>
                            &lt;img title="" alt="medicin-develop-img"
                            data-src="https://www.enukesoftware.com/wp-content/uploads/medician-craft-icon2.png"
                            class="lazyload"
                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="&gt;&lt;noscript&gt;&lt;img
                            title=""
                            src="https://www.enukesoftware.com/wp-content/uploads/medician-craft-icon2.png"
                            alt="medicin-develop-img"&gt;
                          </noscript>
                        </div>
                        <div className="on-demans-app-rigt">
                          <h4>Secure Communication and Efficient Medicine Procurement - Our Promise at MedLocate</h4>
                          <p>
                          MedLocate is a platform that connects patients with pharmacies, 
                          making medicine procurement more convenient and reliable. Our goal
                           is to ensure that patients have easy access to essential medicines, 
                           regardless of their location or the medicine shortages that may occur.
                            We strive to provide secure communication 
                          channels and verified pharmacy options to streamline the process of medicine procurement.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex on-demand-app-work-step roboto-font">
                      
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
          </>
          
        )
    }
}
