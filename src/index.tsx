import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createRouter from './routings/router';
import {RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={createRouter()} />
  </React.StrictMode>
);
