import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/Homepage.css";
import Slider from "./Slider";
import WhyChoose from "../components/Resueable/WhyChoose";
import Benefits from "../components/Resueable/Benefits";
import Overview from "../components/Resueable/Overview";
import Blog from "../components/Resueable/Blog";
import Delivery from "../components/Common/Delivery";
import './Home.css'
import WhyMedlocate from '../components/Resueable/whyMedlocate'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Facts  from '../components/Resueable/Facts' 
import PharmacySingup from "../pages/Auth/PharmacySingup"
 import Feautes  from '../components/Resueable/Feautes'

export default function Landingpage() {
  return (
    <Layout title="MedLocte - Landingpage">
    <>
    
    <ul className="pro-features" style={{ backgroundColor: "#17252A" }}>
      <a className="get-pro" style={{ backgroundColor: "#3AAFA9" }} href="#">
        Chatwith      </a>
      <li className="big-title">Medlocate</li>
      <li className="title"> Version & Objective</li>
      <li>Registered pharmacies</li>
      <li>Registered patient</li>
      <li>Time Saving</li>
      <li> Real Chat with Number pharmacies </li>
      <li>  Oline Order You Precide Medican</li>
      <div className="button">
        <Link
        to="/about" 
     
          className="btn"
        >
          For More Details
        </Link>
        <Link
          to="/contact"
          className="btn"
        >
          Feel Free To Contact Us
        </Link>
      </div>
    </ul>
    {/* Header Area */}
  

   <div className="header" style={{height:"400px"}} >
   
          <div className="slider"  >

            <div className="container" style={{ height: "120px" }} >
              
       <div className="intro " style={{height:"500px"}}>
                <Link className="btn btn-primary" style={
                  { color: "#3AAFA9", background: "#17252A" }
                } to="/login">Get started</Link>
              </div>
                
              
            </div>
            
   </div>
   
 </div>

<Delivery/>

<Blog/>

 <section className="mt-5 mb-4 p-4">
 <h2 className="text-center text-justify mt-2">Our Commitment</h2>
 <p>
   At MedLocate, we are committed to patient safety and satisfaction. We rigorously vet and verify pharmacies in our network to ensure the authenticity of medications. Our customer support team is available 24/7 to assist patients and address their concerns.
 </p>
</section>
<WhyMedlocate/>
<Benefits/>
<WhyChoose/>
<Feautes/>
<Overview/>

    
 

</>
  </Layout>
  
  )
}
