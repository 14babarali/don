import React, { useState, useEffect } from "react";
import Layout from './../components/Layout/Layout'
import axios from "axios";
import { useAuth } from "../context/auth";
import io from "socket.io-client";
import "./../styles/ChatStyles.css";
import Sidebar from "./../components/Layout/Sidebar";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { auth } = useAuth();
  const socket = io("http://localhost:8080"); // Update with your server URL

  useEffect(() => {
  socket.on("message", (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  });
  // Clean up socket on unmount
    return () => {
      socket.off("message");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    try {
      await axios.post("/api/v1/chat/send", {
        message,
        userId: auth.user._id,
      });
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Chat - Medlocate App">
      <div className="chat-container">
        <div className="sidebar">
          <Sidebar />
          {/* Sidebar content (e.g., online users) can be added here */}
        </div>
        <div className="chat-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.userId === auth.user._id ? "sent" : "received"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="message-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Chat;
