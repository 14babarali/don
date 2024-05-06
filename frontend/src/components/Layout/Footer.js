import React from "react";
import { Link } from "react-router-dom";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";

const Footer = () => {
  const myStyles = {
    
   // fontSize: '16px',
    backgroundColor: '#17252A',
    // Add more styles as needed
  };
  return (
    <>
      <footer className="bg-17252a text-white pt-4 pb-2  "style={myStyles} >
        <div className="container">
          <div className="row border-top pt-3">
            <div className="col-md-4">
              <h5>Download Our App</h5>
              <div className="app-links">
                <a href="https://play.google.com/store/apps/details?id=com.medlocate" className="me-2">
                  <img src={googleplay} alt="Google Play Store" style={{ height: '100px' }} />
                </a>
                <a href="https://apps.apple.com/app/medlocate/id123456789">
                  <img src={appstore} alt="App Store" style={{ height: '100px' }} />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li><Link to='TermsOfService'style={{  color: "#FFFFFF" }}>Terms of Service</Link></li>
                <li><Link to='PrivacyPolicy' style={{  color: "#FFFFFF" }}>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Stay Connected</h5>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Enter your email" style={{ color: "#17252A"}} />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ color: "#17252A",background:"#3AAFA9"}}>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="quick-links text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to='/Blog' style={{  color: "#FFFFFF" }}>Blog</Link>
                  </li>
                  <li className="list-inline-item" style={{  color: "#FFFFFF" }}>
                    <Link to='/About' style={{  color: "#FFFFFF" }}>About Us</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to='Contac'style={{  color: "#FFFFFF" }}>Contact Us</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to='Portfolio' style={{  color: "#FFFFFF" }}>Portfolio </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to='PrivacyPolicy'style={{  color: "#FFFFFF" }}>Privacy Policy</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to='Sitemap' style={{  color: "#FFFFFF" }}>Sitemap</Link>
                  </li>
                </ul>
                <ul className="list-inline social-icons">
                  <li className="list-inline-item" >
                    <a href="https://www.facebook.com/Medlocate">
                      <i className="fab fa-2x fa-facebook-square" style={{  color: "#FFFFFF" }} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Medlocate">
                      <i className="fab fa-2x fa-twitter-square"style={{  color: "#FFFFFF" }} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/Medlocate">
                      <i className="fab fa-2x fa-linkedin"style={{  color: "#FFFFFF" }}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <Link to="https://wa.me/+923032402251">
                      <i className="fab fa-2x fa-whatsapp" style={{  color: "#FFFFFF" }} />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className=" get-in-touch">
                      <i className="fas fa-2x fa-envelope"style={{  color: "#FFFFFF" }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom bg-dark text-white py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
             
                <p>Copyright  ©   <Link to="/" className="navbar-brand">
                <span style={{ color: "#17252A" }}>Med</span>
                <span style={{ color: "#3AAFA9" }}>Locate</span>
                </Link>. All Rights Reserved</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
