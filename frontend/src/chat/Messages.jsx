import React from 'react';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';
import './Sidebar.css';
const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { messages } = useSelector(store => store.message);
  // Inside your Messages component's return statement
return (
    <div className='px-4 flex-grow-1 overflow-auto messages-container'>
        {
           messages && messages?.map((message) => {
                return (
                    <Message key={message._id} message={message} className="message" />
                )
            })
        }
    </div>
)

}

export default Messages;
