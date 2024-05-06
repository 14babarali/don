import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";
import './Sidebar.css';
const OtherUsers = () => {
    // my custom hook
    useGetOtherUsers();
    const { otherUsers } = useSelector(store => store.user);
    if (!otherUsers) return null; // early return in React

 // Inside your OtherUsers component's return statement
return (
    <div className='other-users-container'>
        {
            otherUsers?.map((user) => {
                return (
                    <OtherUser key={user._id} user={user} className="other-user" />
                )
            })
        }
    </div>
)

}

export default OtherUsers;
