import {
  Navigate,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import Blogsingle from "./pages/Blogsingle";
import Landingpage from "./pages/Landingpage";
import Help from "./pages/Help";
// import Chat from "./pages/Chat";
// import MessagePage from './components/chat/MessagePage';

import PharmacyHome from "./pages/Pharmacy/PharmacyHome";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import io from "socket.io-client";
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
import { BASE_URL } from '.';

import PharmacySingup from './pages/Auth/PharmacySingup'
import Notify from "././components/Notify";
import PharmacyLogin from './pages/Auth/PharmacyLogin'
function App() {
  // const { authUser } = useSelector(store => store.user);
  // const { socket } = useSelector(store => store.socket);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (authUser) {
  //     const socketio = io(`${BASE_URL}`, {
  //       query: {
  //         userId: authUser._id
  //       }
  //     });
  //     dispatch(setSocket(socketio));

  //     socketio?.on('getOnlineUsers', (onlineUsers) => {
  //       dispatch(setOnlineUsers(onlineUsers))
  //     });
  //     return () => socketio.close();
  //   } else {
  //     if (socket) {
  //       socket.close();
  //       dispatch(setSocket(null));
  //     }
  //   }

  // }, [authUser]);
  // const { authUser } = useSelector(store => store.user);
  // const { socket } = useSelector(store => store.socket);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (authUser) {
  //     const socketio = io(`${BASE_URL}`, {
  //       query: {
  //         userId: authUser._id
  //       }
  //     });
  //     dispatch(setSocket(socketio));

  //     socketio?.on('getOnlineUsers', (onlineUsers) => {
  //       dispatch(setOnlineUsers(onlineUsers))
  //     });
  //     return () => socketio.close();
  //   } else {
  //     if (socket) {
  //       socket.close();
  //       dispatch(setSocket(null));
  //     }
  //   }

  // }, [authUser]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
{/* 
        <Route path="/notif" element={<PharmacyHome />} />
        <Route path="/notify" element={<Notify />} />
         <Route path="/Chat" element={<MessagePage />} />  
        <Route path="/notify" element={<Notify />} /> 
         */}
             <Route path="/PharmacyHome" element={<PharmacyHome />} />
        <Route path="/PharmacySingup" element={<PharmacySingup />} />
                <Route path="/PharmacyLogin" element={<PharmacyLogin />} />
        
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogsingle />} />
        <Route path="/help" element={<Help />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
