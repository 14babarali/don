import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
// import axios from "axios";
import toast from "react-hot-toast";

import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import WhyChoose from "../components/Resueable/WhyChoose";
import Benefits from "../components/Resueable/Benefits";
import Overview from "../components/Resueable/Overview";
import Blog from "../components/Resueable/Blog";
import Newsletter from "../components/Resueable/Newsletter";
import Delivery from "../components/Common/Delivery";
import Requestsform from "../components/Common/Requestsform";
import { Link } from "react-router-dom";

import Medfom from './../components/Form/Medfom';

const HomePage = () => {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]);

  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (page === 1) return;
  //   loadMore();
  // }, [page]);
  // //load more
  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
  //     setLoading(false);
  //     setProducts([...products, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };


 
  return (
    <Layout title={"Medlocate  - Best online  "}>
     
      <>
      <div className="preloader">
      <div className="loader">
        <div className="loader-outter" />
        <div className="loader-inner" />
        <div className="indicator">
          <svg width="16px" height="12px">
            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
          </svg>
        </div>
      </div>
    </div>

  {/* start header */}
 
   <Requestsform/>
  
<Delivery/>
<Blog/>

  <section className="mt-5 mb-4 p-4">
  <h2 className="text-center text-justify mt-2">Our Commitment</h2>
  <p className="txthelp">
    At MedLocate, we are committed to patient safety and satisfaction. We rigorously vet and verify pharmacies in our network to ensure the authenticity of medications. Our customer support team is available 24/7 to assist patients and address their concerns.
  </p>
</section>
<Benefits/>
<WhyChoose/>
<Overview/>



</>
    </Layout>
  );
};

export default HomePage;
