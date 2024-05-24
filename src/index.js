import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Create a root instance for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <React.StrictMode> {/* Strict mode for additional checks */}
    <Provider store={store}> {/* Provide Redux store to all components */}
      <App /> {/* Render the App component */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // Report web vitals metrics
