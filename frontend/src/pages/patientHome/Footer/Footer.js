import React, { Component } from 'react';
import '../Css/common.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <>
        {/* <Common></Common> */}
        <p />
        {/* fixed quick links */}
        <footer className="bg-17252a main-area"> {/* Change bg-light-blue to bg-17252a */}
          <div className="container">
            <div className="row border-top">
              <div className="col-md-12">
                <div className="quick-links text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to='Blog'>Blog</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='AboutUs'>About Us</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='Careers'>Careers </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='ContacUs'>Contact Us</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='Portfolio'>Portfolio </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='PrivacyPolicy'>Privacy Policy</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to='Sitemap'>Sitemap</Link>
                    </li>
                    {/* Add other list items for navigation */}
                  </ul>
                  <ul className="list-inline social-icons">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/Medlocate">
                        <i className="fab fa-2x fa-facebook-square" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/Medlocate">
                        <i className="fab fa-2x fa-twitter-square" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/Medlocate">
                        <i className="fab fa-2x fa-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <Link to="https://wa.me/+923032402251">
                        <i className="fab fa-2x fa-whatsapp" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="message get-in-touch">
                        <i className="fas fa-2x fa-envelope" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bottom copyright-text">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="copyright-text text-center">
                  <p>Copyright © MedLocate. All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
