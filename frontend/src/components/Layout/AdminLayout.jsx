import React from 'react';
import AdminMenu from './AdminMenu'
import Header from "./Header";
import './AdminMenu.css'
import AdminSlider from '../Admin/AdminSlider'

function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid">

        <div className="row">
          {/* Sidebar */}
          <div className="col-sm-3"  >
            {/* <AdminMenu /> */}
            <AdminSlider />
          </div>
          {/* Main Content Area */}
          <div className="px-4 mt-4 col-sm-9">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
