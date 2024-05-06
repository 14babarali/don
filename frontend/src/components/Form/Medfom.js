import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Medfom = () => {
  const navigate = useNavigate();
 
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting ");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("photo", photo);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        // navigate("/dashboard/admin/products");  
           navigate("#");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
 <>
 
 

      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
         
          </div>
          <div className="col-md-9">
            <h1>Request </h1>
            <div className="m-1 w-75">
             
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
             

             
             
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      </>

  );
};

export default Medfom;
