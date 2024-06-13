import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import User from './pages/User';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
], { basename: "/" });
