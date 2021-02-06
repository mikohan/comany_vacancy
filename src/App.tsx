import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './App.css';

import PersistentDrawerLeft from './components/MainContent';

import DarkThemeProvider from './context/ThemeContext';

const history = createBrowserHistory();

const trackingId = 'G-LFEBYF29D3'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
