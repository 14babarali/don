import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHospital, FaShoppingCart, FaUserPlus, FaBox } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div className="pt-4 mt-4 text-center"> {/* Added margin top and padding top */}
      <div className="list-group dashboard-menu">
        <h4 className="mb-4">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action"
          activeClassName="active-link"
        >
          <FaUser className="menu-icon" />
          Patient
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action"
          activeClassName="active-link"
        >
          <FaHospital className="menu-icon" />
          Pharmacy
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action"
          activeClassName="active-link"
        >
          <FaBox className="menu-icon" />
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action"
          activeClassName="active-link"
        >
          <FaShoppingCart className="menu-icon" />
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action"
          activeClassName="active-link"
        >
          <FaUserPlus className="menu-icon" />
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
