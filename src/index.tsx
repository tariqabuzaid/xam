import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppStateProvider from './hooks/AppStateContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStateProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </AppStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
