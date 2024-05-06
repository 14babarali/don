import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import './Sidebar.css';

const MessagePage = () => {
    const { authUser } = useSelector(store => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (authUser) {
            navigate("/login");
        }
    }, []);

    return (
        <Layout>
            <div className='message-page-container'>
                <div className="sidebar-message-container">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="message-container">
                        <MessageContainer />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default MessagePage;



// import React, { useEffect } from 'react';
// import Sidebar from './Sidebar';
// import MessageContainer from './MessageContainer';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import Layout from '../components/Layout/Layout';
// import './Sidebar.css';
// const MessagePage = () => {
//  const { authUser } = useSelector(store => store.user);
//  const navigate = useNavigate();
//  useEffect(() => {
//     if (!authUser) {
//       navigate("/login");
//     }
//  }, []);
// // Inside your MessagePage component's return statement
// return (

//      <div className='d-flex flex-column align-items-stretch rounded-lg overflow-hidden bg-light bg-opacity-0 message-page-container'>
//        <Sidebar />
//        <MessageContainer />
//      </div>

//  )
 
// }

// export default MessagePage;
