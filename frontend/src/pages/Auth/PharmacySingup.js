

import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

import logo from "../../assets/logo.png";
const PharmacySingup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [license, setlicense] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {

    try {
      const res = await axios.post("pharmacy/signup", {
        name,
        email,
        password,
        phone,
        address,
        answer,
        license,
      });
      // if (res && res.data.success)
          if (res.status === 201)
      {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Medlocate App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          
        <div style={{ textAlign: "center" }}>
        <img src={logo} alt="profile" className="profile" style={{ display: "block", margin: "0 auto" }} />
      </div>
              <h4 className="title" >REGISTER </h4>
          <div className="mb-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Pharmacy  Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Pharmacy  Email "
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Pharmacy  Password"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Pharmacy  Phone"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Pharmacy  Address"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Security key"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              value={license}
              onChange={(e) => setlicense(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="license"
              required
            />
          </div>
          <button type="submit" className="btnResgister btn-primary" style={{  alignItems:"center" }}>
            REGISTER
          </button>
          <br/>
          <p>   </p>
          <p>        
          @MedLocate 23-24
          <Link to={"/PharmacyLogin"} className="AlreadyAccount" > Already have an account? Login</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default PharmacySingup;
