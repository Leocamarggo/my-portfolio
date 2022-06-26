import React from 'react';
import Routes from './router/paths';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
