import React from 'react'

import Sidebar from "../components/sidebar/Sidebar.js";
import MessageContainer from "../components/messages/MessageContainer.js";
import "./Home.css"; // Import CSS file for styling
import Layout from "../components/Layout/Layout";
import MainChat from './Mainchat'
import ChatHome from'./ChatHome'
export default function NotificationsAndChat() {
  return (
    <Layout title={"Medlocate  - Chat With Number Of Pharmacy  "}>
    
    <div className="home-container">
    <ChatHome/>
    <MainChat/>
  </div>
    
    </Layout>
  )
}
