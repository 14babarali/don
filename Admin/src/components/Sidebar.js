// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Custom styles (see below)

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="nav flex-column">
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
        </nav>
    );
};

export default Sidebar;
