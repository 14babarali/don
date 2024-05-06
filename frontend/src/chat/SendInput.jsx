import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';
import './Sidebar.css';
const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.message);

    const userId = "6605500342d3f6a6d9dbec24"; // Hardcoded user ID for testing
    // const message = "Your message here"; 
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`, { message }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

//             const res = await axios.post(`http://localhost:8080/api/v1/message/send/${userId}`, { message }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });
            dispatch(setMessages([...messages, res?.data?.newMessage]))
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }
    // Inside your SendInput component's return statement
return (
    <form onSubmit={onSubmitHandler} className='px-4 my-3 send-input-container'>
        <div className='position-relative w-100'>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder='Send a message...'
                className='form-control text-sm rounded-lg p-3 border-dark bg-secondary text-white input-field'
            />
            <button type="submit" className='position-absolute top-0 end-0 d-flex align-items-center pr-4 send-button'>
                <IoSend />
            </button>
        </div>
    </form>
)

}

export default SendInput;
