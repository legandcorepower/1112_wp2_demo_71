import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_71 from './App_71';
import { AppProvider_71 } from './context_71';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_71>
      <App_71 />
    </AppProvider_71>
  </React.StrictMode>
);
