import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {


  try {
    const res = await axios.post("http://localhost:8080/pharmacy/login", {
      email,
      password,
    });

    console.log("Login response:", res); // Log the response

    if (res.status === 200 && res.data.success) {
      toast.success(res.data.message);
      // localStorage.setItem("auth", JSON.stringify(res.data));
      // localStorage.setItem("user_id", res.data.id);
      navigate("/PharmacyHome");
    } else {
      console.log("Login failed. Response:", res);
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log("Error:", error);
    toast.error("Something went wrong");
  }
};

  // // form function
  // const handleSubmit = async (e) => {

  //   try {
  //     const res = await axios.post("http://localhost:8080/pharmacy/login", {
  //       email,
  //       password,
  //     })

  //     // if (res && res.data.success)
  //         if (res.status === 200 && res.data.success) {
  //       toast.success(res.data && res.data.message);
  //       // setAuth({
  //       //   ...auth,
  //       //   user: res.data.user,
  //       //   token: res.data.token,
          
  //       // })
  //     //     .then((res) => {
  //     //   localStorage.setItem("token", res.data.token);
  //     //     localStorage.setItem("user_id", res.data.id);
  //     //     navigate(location.state || "/home");
  //     // })
  //       localStorage.setItem("auth", JSON.stringify(res.data));
  //         localStorage.setItem("user_id", res.data.id);
  //       navigate( "/PharmacyHome");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };
  return (
    <Layout title="   Medloacte">
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
       
        <div style={{ textAlign: "center" }}>
        <img src={logo} alt="profile" className="profile" style={{ display: "block", margin: "0 auto" }} />
      </div>
          <h4 className="title" style={{color:"#3AAFA9"}}>WelCome Back</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter  Pharmacy Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter  Pharmacy Password"
              required
            />
          </div>
          <div className="mb-3">
          <Link to={"/forgot-password"} className="ForgotPass" >Forgot Password ?</Link>
           
          </div>

          <button type="submit" className="btnLogin btn-primary">
            LOGIN
          </button>
          <br/>
          <p>   </p>
          <p>
      <Link to={"/register"} className="GoBackSignup" >        SingUp  as patient</Link>
          </p>
       
          
                 <Link to={"/PharmacySingup"} className="GoBackSignup" >   SingUp as Pharmacy</Link>
    
        </form>
    <p>@MedLocate 23-24</p>
      </div>
    </Layout>
  );
};

export default Login;
