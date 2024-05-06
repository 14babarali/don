import mongoose  from 'mongoose';



 export const ChatSchema  = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  pharmacyId: {
    type: Schema.Types.ObjectId,
    ref: 'Pharmacy',
    required: true,
  },
  messages: [{
    type: String,
  }],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;
