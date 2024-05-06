import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './admin.css';

const AdminPanelLayout = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/admin"
                className="nav-link"
                activeClassName="active"
              >
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/phr"
                className="nav-link"
                activeClassName="active"
              >
                Pharmacy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/user"
                className="nav-link"
                activeClassName="active"
              >
                Patient
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chat"
                className="nav-link"
                activeClassName="active"
              >
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/order"
                className="nav-link"
                activeClassName="active"
              >
                Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/setting"
                className="nav-link"
                activeClassName="active"
              >
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className="nav-link"
                activeClassName="active"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminPanelLayout;
