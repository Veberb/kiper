import React from 'react';
import './App.css';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="card">
        <ToastProvider autoDismiss autoDismissTimeout={3500}>
          <Routes />
        </ToastProvider>
      </div>
    </div>
  );
}

export default App;
