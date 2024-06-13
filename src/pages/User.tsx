import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile: React.FC = () => {
  const { state } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {state.username}</h2>
      <p>User is logged in: {state.isLoggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserProfile;
