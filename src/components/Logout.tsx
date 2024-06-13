import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Logout: React.FC = () => {
  const { dispatch } = useContext(UserContext);

  const handleLogout = () => {
    // Perform logout logic
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
