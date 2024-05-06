import User from "../models/userModel.js"; 
import Pharmacy from '../models/pharmacyModel.js'
import FormData from "../models/FormDataSchema.js";
import Conversation from "../models/conversationModel.js"; 
import Chat from "../models/chatModel.js"; 

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:['http://localhost:3000'],
        methods:['GET', 'POST'],
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId->socketId}


io.on('connection', (socket)=>{
    const userId = socket.handshake.query.userId
    if(userId !== undefined){
        userSocketMap[userId] = socket.id;
    } 

    io.emit('getOnlineUsers',Object.keys(userSocketMap));

    socket.on('disconnect', ()=>{
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap));
    })

})

export const setupSocketIO = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // Join a room based on conversation ID
    socket.on("join", (conversationId) => {
      socket.join(conversationId);
    });

    // Leave a room based on conversation ID
    socket.on("leave", (conversationId) => {
      socket.leave(conversationId);
    });

    // Send message
    socket.on("message", async (data) => {
      const { conversationId, senderId, receiverId, content } = data;

      try {
        // Check if a conversation already exists between sender and receiver
        let conversation = await Conversation.findOne({
          participants: { $all: [senderId, receiverId] },
        });

        // If conversation doesn't exist, create a new one
        if (!conversation) {
          conversation = new Conversation({
            participants: [senderId, receiverId],
          });
          await conversation.save();
        }

        // Save message to database
        const newMessage = new Message({
          conversationId: conversation._id,
          senderId,
          receiverId,
          content,
        });
        await newMessage.save();

        // Broadcast message to all users in the conversation room
        io.to(conversationId).emit("message", newMessage);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    });
  });
};

export {app, io, server};

