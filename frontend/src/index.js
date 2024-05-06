import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
// import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";

import { Toaster } from "react-hot-toast";
// import { Provider } from "react-redux";
// import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';

// let persistor = persistStore(store);
// import io from "socket.io-client";
// const socket = io("http://localhost:8080");

export const BASE_URL = "http://localhost:8080"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}

    {/* <PersistGate loading={null} persistor={persistor}> */}
    <AuthProvider>
      <SearchProvider>
      {/* <CartProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </CartProvider> */}
      </SearchProvider>
    </AuthProvider>
    <Toaster />
    {/* </PersistGate> */}
    {/* // </Provider> */}
  </React.StrictMode>
);
