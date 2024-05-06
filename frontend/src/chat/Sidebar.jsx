import React, { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';


const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }
 

    return (
        <div className='flex flex-col p-4 border-r border-slate-500'>
            <form onSubmit={searchSubmitHandler} className='search-form'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='form-control rounded-pill'
                    type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='text-white btn btn-dark'>
                    <BiSearchAlt2 className='w-6 h-6' />
                </button>
            </form>
            <div className="py-0 my-0 border-top"></div>
            <OtherUsers />
            <div className='mt-2'>
                <button onClick={logoutHandler} className='logout-button'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;
