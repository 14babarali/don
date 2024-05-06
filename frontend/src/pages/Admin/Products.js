// import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/Layout/AdminLayout"; // Corrected import path

// import axios from "axios";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
const Products = () => {
  // const [products, setProducts] = useState([]);

  //getall products
  // const getAllProducts = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/product/getproduct");
  //     setProducts(data.products);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Someething Went Wrong");
  //   }
  // };

  //lifecycle method
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <AdminLayout>
      <div className="row dashboard">
        
     <h3>shewo</h3>
      </div>
    </AdminLayout>
  );
};

export default Products;
