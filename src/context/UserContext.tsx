import React, { createContext, useReducer, ReactNode } from 'react';

// Define the extended State interface
interface State {
  username: string;
  isLoggedIn: boolean;
  accessToken?: string; // Optional: If you're using tokens for authentication
}

// Define Action types
type Action =
  | { type: 'SET_USER'; payload: string }
  | { type: 'LOGIN'; payload: { username: string; accessToken?: string } }
  | { type: 'LOGOUT' };

// Initial State
const initialState: State = {
  username: '',
  isLoggedIn: false,
  accessToken: undefined,
};

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, username: action.payload };
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        accessToken: action.payload.accessToken,
      };
    case 'LOGOUT':
      return { ...initialState }; // Reset state to initial
    default:
      return state;
  }
};

// Create Context
const UserContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// Provider Component
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Export Context and Provider
export { UserContext, UserProvider };
