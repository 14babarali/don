import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import './Sidebar.css';
const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(user._id);
    const selectedUserHandler = (user) => {
        dispatch(setSelectedUser(user));
    }
    return(
    
    <>
        <div onClick={() => selectedUserHandler(user)} className={`d-flex align-items-center gap-2 p-2 rounded ${selectedUser?._id === user?._id ? 'selected-user' : ''} cursor-pointer other-user-container`} style={{ backgroundColor: selectedUser?._id === user?._id ? '#f3f4f6' : '' }}>
            <div className={`rounded-circle ${isOnline ? 'online-status' : ''}`} style={{ width: '48px', height: '48px' }}>
                <img src={user?.profilePhoto} alt="user-profile" className="rounded-circle profile-photo" />
            </div>
            <div className='flex-grow-1 ml-2'>
                <div className='d-flex justify-content-between'>
                    <p>{user?.fullName}</p>
                </div>
            </div>
        </div>
        <div className='border-top my-0 py-0'></div>
    </>
)

    
}

export default OtherUser;
