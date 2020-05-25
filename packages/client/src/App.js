import React from 'react';
import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="card">
        <BrowserRouter>
          <ToastProvider autoDismiss autoDismissTimeout={3500}>
            <Routes />
          </ToastProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
