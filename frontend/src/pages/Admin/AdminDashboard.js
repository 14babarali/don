import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout"; // Import AdminLayout

import { useAuth } from "../../context/auth";
import AdminPages from '../../components/Admin/AdminPages'

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <AdminLayout>
      <div className=" pt-4 m-3 mt-4 container-fluid dashboard">
        <div className="row">

          <div className="col-md-9">
            <div className=" card w-75">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <AdminPages />

            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
