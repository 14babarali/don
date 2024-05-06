import React, { useEffect } from 'react'
import Sidebar from './Sidebar'

import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

const MessagePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) {
      navigate("/login");

    }
    console.log(authUser)
  }, []);
  return (
    <Layout>
      <div className='  flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden 
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </Layout>
  )
}

export default MessagePage