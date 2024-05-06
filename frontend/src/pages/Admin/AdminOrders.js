import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminLayout from "../../components/Layout/AdminLayout"; // Corrected import path

import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  // const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  // const getOrders = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/auth/all-orde");
  //     setOrders(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (auth?.token) getOrders();
  // }, [auth?.token]);

  // const handleChange = async (orderId, value) => {
  //   try {
  //     const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
  //       status: value,
  //     });
  //     getOrders();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <AdminLayout title={"All Orders Data"}>
      <div className="p-8 pt-4 m-3 mt-4  row dashboard">

        <h1>Hi Admin Order Page</h1>


      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
