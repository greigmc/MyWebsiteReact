import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import DavidJones from './Components/Portfolio/SinglePages/DavidJones';
import Trenery from    './Components/Portfolio/SinglePages/Trenery';
import NavBarOne from './Navigation/NavBarOne';
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Navigation/NavBarOne',
    element: <NavBarOne />,
  },
  // {
  //   path: '/SinglePages/DavidJones',
  //   element: <DavidJones />,
  // },
  {
    path: '/SinglePages/Trenery',
    element: <Trenery />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
