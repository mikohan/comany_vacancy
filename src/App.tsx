import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import PersistentDrawerLeft from './components/MainContent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PersistentDrawerLeft />
      </div>
    </BrowserRouter>
  );
}

export default App;
