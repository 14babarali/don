import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
import NotificationPopup from "../../pages/components/Notificationdropdown";
const Header = () => {
  const [auth, setAuth] = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const notifications = [
    { id: 1, title: "Babar Pharmacy", message: "Yes i have available." },
    { id: 2, title: "Ali Pharmacy", message: "Not available." },
    { id: 2, title: "Balti pharmacy", message: "Yes i have available." },
  ];
  // const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const isAuthenticated = auth?.user;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar navbar-expand-lg fixed-top"
        style={{ color: "#FFFFFF", height:35 }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="#" className="navbar-brand">
              <span style={{ color: "White" }}>Med</span>
              <span style={{ color: "#3AAFA9" }}>Locate</span>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/home"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      homepage
                    </NavLink>
                  </li>

                  <li className="nav-iteam" style={{ color: "#FFFFFF" }}>
                    <NavLink
                      to="/Chat"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      chat
                    </NavLink>
                  </li>

                  <li className="nav-iteam" style={{ color: "#FFFFFF" }}>
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li
                    className="nav-item dropdown"
                    style={{ color: "#FFFFFF" }}
                  >
                    <Link
                      className="nav-link dropdown-toggle"
                      to={"/categories"}
                      data-bs-toggle="dropdown"
                      style={{ color: "#FFFFFF" }}
                    >
                      About
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={"/about"}>
                          about us
                        </Link>
                        <Link className="dropdown-item" to={"/help"}>
                          Help
                        </Link>
                        <Link className="dropdown-item" to={"/team"}>
                          Team
                        </Link>
                      </li>

                      {categories?.map((c) => (
                        <li key={c.slug}>
                          <Link
                            className="dropdown-item"
                            to={`/category/${c.slug}`}
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              )}

              {!isAuthenticated && (
                <>
                  <li className="nav-item" style={{ color: "#FFFFFF" }}>
                    <NavLink
                      to="/blog"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/help"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      Help
                    </NavLink>
                  </li>
                   <li className="nav-item">
                    <NavLink
                      to="/help"
                      className="nav-link"
                      style={{ color: "#FFFFFF" }}
                    >
                      Server
                    </NavLink>
                  </li>
                  {/* Add other links for non-authenticated users */}
                </>
              )}

              {isAuthenticated && (
                <>
                  <li
                    className="nav-item dropdown"
                    style={{ color: "#FFFFFF" }}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      style={{ color: "#FFFFFF", border: "none" }}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Notification message from pharmacy */}

        <li>
          <Link onClick={togglePopup}>
            <img style={{height:30}}
              className="bellnotification"
              src={require("../../assets/bell.png")}
              alt="Notifications"
            />
          </Link>
        </li>
        {showPopup && (
          <NotificationPopup
            notifications={notifications}
            onClose={togglePopup}
          />
        )}
      </nav>
    </>
  );
};

export default Header;

// import React from "react";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/auth";
// import Notify from "../Notify";

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import toast from "react-hot-toast";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faHome,
//   faComments,
//   faPhone,
//   faInfoCircle,
//   faUserCircle,
//   faTachometerAlt,
//   faQuestionCircle,
//   faLifeRing,
//   faUsers,
//   faSignOutAlt,
//   faPen,
// } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   const [auth, setAuth] = useAuth();
//   const navigate = useNavigate();
//   const categories = useCategory();
//   const [showPopup, setShowPopup] = useState(false);
//   const handleLogout = () => {
//     setAuth({
//       ...auth,
//       user: null,
//       token: "",
//     });
//     localStorage.removeItem("auth");
//     toast.success("Logout Successfully");
//   };
//   const handleNotifyClick = () => {
//     // Toggle the visibility of the popup
//     setShowPopup(!showPopup);
//   };
//   const isAuthenticated = auth?.user;

//   const toggleNotification = () => {
//     // Define your toggleNotification function here
//   };

//   const showNotification = true; // Define showNotification based on your logic

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{ color: "#17252A" }}
//       >
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link to="#" className="navbar-brand">
//               <span style={{ color: "White" }}>Med</span>
//               <span style={{ color: "#3AAFA9" }}>Locate</span>
//             </Link>
//             <ul className="mb-2 navbar-nav ms-auto mb-lg-0">
//               {isAuthenticated && (
//                 <>
//                   <li className="nav-item">
//                     <NavLink
//                       to="/home"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                     >
//                       <FontAwesomeIcon
//                         icon={faHome}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink
//                       to="/Chat"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                     >
//                       <FontAwesomeIcon
//                         icon={faComments}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink
//                       to="/contact"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                     >
//                       <FontAwesomeIcon
//                         icon={faPhone}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </NavLink>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <Link
//                       className="nav-link dropdown-toggle"
//                       to={"/categories?"}
//                       data-bs-toggle="dropdown"
//                     >
//                       <FontAwesomeIcon
//                         icon={faInfoCircle}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li style={{ backgroundColor: "#3AAFA9" }}>
//                         <Link className="dropdown-item" to={"/about"}>
//                           About
//                           <FontAwesomeIcon
//                             icon={faPhone}
//                             className="me-3"
//                             style={{
//                               fontSize: "24px",
//                               marginLeft: "auto",
//                               color: "red",
//                             }}
//                           />
//                         </Link>
//                         <Link
//                           className="dropdown-item"
//                           to={"/help"}
//                           style={{ backgroundColor: "#3AAFA9" }}
//                         >
//                           Help
//                           <FontAwesomeIcon
//                             icon={faQuestionCircle}
//                             className="me-3"
//                             style={{ fontSize: "24px", marginLeft: "auto" }}
//                           />
//                         </Link>
//                         <Link
//                           className="dropdown-item"
//                           to={"/team"}
//                           style={{ backgroundColor: "#3AAFA9" }}
//                         >
//                           Team
//                           <FontAwesomeIcon
//                             icon={faUsers}
//                             className="me-3"
//                             style={{ fontSize: "24px", marginLeft: "auto" }}
//                           />
//                         </Link>
//                       </li>
//                       {categories?.map((c) => (
//                         <li key={c.slug}>
//                           <Link
//                             className="dropdown-item"
//                             to={`/category/${c.slug}`}
//                             style={{ color: "#fff" }}
//                           >
//                             {c.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 </>
//               )}

//               {!isAuthenticated && (
//                 <>
//                   <li className="nav-item">
//                     <NavLink
//                       to="/blog"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                     >
//                       <FontAwesomeIcon
//                         icon={faPen}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </NavLink>
//                   </li>
//                   {/* <li className="nav-item">
//                     <NavLink
//                       to="/notif"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                     >
//                       <FontAwesomeIcon
//                         icon={faLifeRing}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </NavLink>
//                   </li> */}

//                   <li className="nav-item">
//                     <button
//                       className="nav-link"
//                       style={{
//                         color: "#17252A",
//                         border: "none",
//                         background: "none",
//                       }}
//                       onClick={toggleNotification}
//                     >
//                       <FontAwesomeIcon
//                         icon={faBell}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />

//                       {showNotification && (
//                         <Notify
//                           notifications={[]}
//                           onClose={toggleNotification}
//                         />
//                       )}
//                     </button>
//                   </li>
//                   {/* Add other links for non-authenticated users */}
//                 </>
//               )}

//               {isAuthenticated && (
//                 <>
//                   <li className="nav-item dropdown">
//                     <NavLink
//                       className="nav-link dropdown-toggle"
//                       style={{ color: "#17252A", border: "none" }}
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                     >
//                       {" "}
//                       <FontAwesomeIcon
//                         icon={faUserCircle}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                       {auth?.user?.name}
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                       <li style={{ backgroundColor: "#3AAFA9" }}>
//                         <NavLink
//                           to={`/dashboard/${
//                             auth?.user?.role === 1 ? "admin" : "user"
//                           }`}
//                           className="dropdown-item"
//                         >
//                           Dashboard
//                           <FontAwesomeIcon
//                             icon={faTachometerAlt}
//                             className="me-3"
//                             style={{ fontSize: "24px", marginLeft: "auto" }}
//                           />
//                         </NavLink>
//                       </li>
//                       <li style={{ backgroundColor: "#3AAFA9" }}>
//                         <NavLink
//                           onClick={handleLogout}
//                           to="/login"
//                           className="dropdown-item"
//                         >
//                           Logout
//                           <FontAwesomeIcon
//                             icon={faSignOutAlt}
//                             className="me-3"
//                             style={{ fontSize: "24px", marginLeft: "auto" }}
//                           />
//                         </NavLink>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     {/* <Link to="/notify" className="nav-link" style={{ color: "#17252A" }}> */}

//                     <Link
//                       to="../Notify.js"
//                       className="nav-link"
//                       style={{ color: "#17252A" }}
//                       onClick={handleNotifyClick}
//                     >
//                       <FontAwesomeIcon
//                         icon={faBell}
//                         className="me-3"
//                         style={{ fontSize: "24px", marginLeft: "auto" }}
//                       />
//                     </Link>
//                   </li>
//                   {/* Render Notify component conditionally */}
//                   {showNotification && (
//                     <Notify notifications={[]} onClose={toggleNotification} />
//                   )}
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {showPopup && <Notify onClose={() => setShowPopup(false)} />}
//     </>
//   );
// };

// export default Header;
