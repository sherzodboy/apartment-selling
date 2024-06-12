import React from 'react';
import useUniqueId from '../hooks/useid';
import Spinner from '../components/Spinner/Spinner';

const HomePage = React.lazy(() => import('../pages/Home'));
const PropertiesPage = React.lazy(() => import('../pages/Properties'));

// import HomePage from '../pages/Home';
// import PropertiesPage from '../pages/Properties';

export const navbar = [
  {
    id: useUniqueId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        }
      >
        <HomePage />
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        }
      >
        <PropertiesPage />
      </React.Suspense>
    ),
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
