import express from 'express';
import Chat from '../models/.js';
import Conversation from '../models/conversationModel.js'

const router = express.Router();

// Create a new conversation
router.post('/conversations', async (req , res) => {
  const { patientId, pharmacyId } = req.body;
  const conversation = new Conversation({ patientId, pharmacyId });
  await conversation.save();
  res.json(conversation);
});

// Get all conversations for a patient
router.get('/conversations/patient/:patientId', async (req , res) => {
  const { patientId } = req.params;
  const conversations = await Conversation.find({ patientId });
  res.json(conversations);
});

// Get all conversations for a pharmacy
router.get('/conversations/pharmacy/:pharmacyId', async (req  , res) => {
  const { pharmacyId } = req.params;
  const conversations = await Conversation.find({ pharmacyId });
  res.json(conversations);
});

// Create a new chat message
router.post('/chats', async (req, res) => {
  const { conversationId, message } = req.body;
  const chat = new Chat({ conversationId, message });
  await chat.save();
  res.json(chat);
});

// Get all chat messages for a conversation
router.get('/chats/conversation/:conversationId', async (req , res) => {
  const { conversationId } = req.params;
  const chats = await Chat.find({ conversationId });
  res.json(chats);
});

export default router;
