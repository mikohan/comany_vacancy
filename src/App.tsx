import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import PersistentDrawerLeft from './components/MainContent';

import DarkThemeProvider from './context/ThemeContext';

function App() {
  return (
    <DarkThemeProvider>
      <BrowserRouter>
        <div className="App">
          <PersistentDrawerLeft />
        </div>
      </BrowserRouter>
    </DarkThemeProvider>
  );
}

export default App;
