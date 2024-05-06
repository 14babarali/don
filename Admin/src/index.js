import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";

import { Toaster } from "react-hot-toast";


export const BASE_URL = "http://localhost:8080"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

        <BrowserRouter>
          <App />
        </BrowserRouter>
    <Toaster />
  </React.StrictMode>
);
