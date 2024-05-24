import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';

// Main App component
function App() {
  return (
    <Provider store={store}> {/* Provide Redux store to all components */}
      <PersistGate loading={null} persistor={persistor}> {/* PersistGate waits for redux-persist to load before rendering the application */}
        <Router> {/* Use BrowserRouter as Router */}
          <Routes> {/* Routes component to define routes */}
            <Route path="/" element={<HomePage />} /> {/* Route for home page */}
            <Route path="/:title" element={<ContentPage />} /> {/* Route for content page with dynamic title */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App; // Export the App component
