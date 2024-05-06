import React from 'react'
import './Admin.css'
import { NavLink } from "react-router-dom";
import { FaApple, FaHome, FaUser, FaComment, FaQuestion, FaCog, FaLock, FaSignOutAlt } from 'react-icons/fa';

export default function AdminSlider() {
    return (
        <>
            <div className="navigation" style={{ margin: '0', padding: '0', background: "#17252A" }}>

                <ul>
                    <li>

                        <NavLink
                            to="/dashboard/admin/create-category">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaApple />
                            </span>
                            <span className="title">Brand Name</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/create-product">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaHome />
                            </span>
                            <span className="title">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/products">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaUser />
                            </span>
                            <span className="title">Customers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/orders">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaComment />
                            </span>
                            <span className="title">Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/users">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaQuestion />
                            </span>
                            <span className="title">Help</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaCog />
                            </span>
                            <span className="title">Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/create-category">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaLock />
                            </span>
                            <span className="title">Password</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <span className="icon" style={{ fontSize: '24px' }}> {/* Increased icon size */}
                                <FaSignOutAlt />
                            </span>
                            <span className="title">Sign Out</span>
                        </NavLink>
                    </li>
                </ul>
            </div >

        </>
    )
}
