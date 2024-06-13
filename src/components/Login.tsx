import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login: React.FC = () => {
  const { dispatch } = useContext(UserContext);

  const handleLogin = () => {
    // Perform login logic (e.g., authenticate user)
    // Assume login is successful
    const username = 'user123';
    const accessToken = 'example_access_token';

    dispatch({ type: 'LOGIN', payload: { username, accessToken } });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
