import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './App.css';

import PersistentDrawerLeft from './components/MainContent';

import DarkThemeProvider from './context/ThemeContext';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <DarkThemeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <PersistentDrawerLeft />
          </div>
        </BrowserRouter>
      </DarkThemeProvider>
    </Router>
  );
}

export default App;
