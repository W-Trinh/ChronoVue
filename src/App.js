import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store'; // Assurez-vous que les chemins sont corrects
import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/content" element={<ContentPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
