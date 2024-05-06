import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import './Sidebar.css';
const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

 // Inside your Message component's return statement
return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
)

}

export default Message;
