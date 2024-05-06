import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();

  return <div>User Profile: {username}</div>;
};

export default UserProfile;
