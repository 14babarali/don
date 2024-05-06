import React, { useEffect } from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import './Sidebar.css';
const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const isOnline = onlineUsers?.includes(selectedUser?._id);

    // Inside your MessageContainer component's return statement
return (
    <>
        {
            selectedUser !== null ? (
                <div className='d-flex flex-column message-container'>
                    <div className='d-flex align-items-center user-profile p-2 mb-2'>
                        <div className={`rounded-circle ${isOnline ? 'online-status' : ''}`} style={{ width: '48px', height: '48px' }}>
                            <img src={selectedUser?.profilePhoto} alt="user-profile" className="rounded-circle" />
                        </div>
                        <div className='flex-grow-1 ml-2'>
                            <div className='d-flex justify-content-between'>
                                <p>{selectedUser?.fullName}</p>
                            </div>
                        </div>
                    </div>
                    <Messages />
                    <SendInput />
                </div>
            ) : (
                <div className='d-flex flex-column justify-content-center align-items-center no-selected-user'>
                    <h1 className='display-4 font-weight-bold'>Hi, {authUser?.fullName}</h1>
                    <h1 className='display-5'>Let's start conversation</h1>
                </div>
            )
        }
    </>
)

}

export default MessageContainer;
