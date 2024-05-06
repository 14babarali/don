import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Slider = () => {
  const images = ["slider1.png", "slider2.jpg", "slider3.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="header" style={{ height: "600px", position: "relative" }}>
      <div className="slider" style={{ position: "relative", overflow: "hidden" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`../img/${image}`}
            alt={`Slider Image ${index + 1}`}
            className={index === activeIndex ? "active" : ""}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === activeIndex ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        <div
          className="container"
          style={{
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background to improve visibility
          }}
        >
          <div className="intro">
            <Link
              className="btn btn-primary"
              style={{ color: "#17252A", background: "#3AAFA9" }}
              to="/login"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <h2>
            Med<span>Locate</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;
