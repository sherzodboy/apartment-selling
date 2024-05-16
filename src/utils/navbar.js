import useUniqueId from '../hooks/useid';
import HomePage from '../pages/Home';
import PropertiesPage from '../pages/Properties';

export const navbar = [
  {
    id: useUniqueId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <PropertiesPage />,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <h1>Sing in</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <h1>Sing up</h1>,
    title: 'Sign Up',
    path: '/signup',
    private: false,
    hidden: true,
  },
];
