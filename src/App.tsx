import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import PersistentDrawerLeft from './components/MainContent';

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <Navbar />
    </div>
  );
}

export default App;
