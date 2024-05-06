import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";


import { useNavigate } from "react-router-dom";


import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {


  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 
  
  //handle payments
 
  return (
    <Layout>
     <h1>  patment</h1>
    </Layout>
  );
};

export default CartPage;
