import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './App.css';

import PersistentDrawerLeft from './components/MainContent';

import DarkThemeProvider from './context/ThemeContext';
import { Person } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <DarkThemeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Helmet
              script={[
                helmetJsonLdProp<Person>({
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Colorado Springs',
                    addressRegion: 'CO',
                    postalCode: '80840',
                    streetAddress: '100 Main Street',
                  },
                  email: 'angara99@gmail.com',
                  image: require('./assets/me1.jpg'),
                  jobTitle: 'Full Stack Developer',
                  name: 'Vladimir Vostrikov',
                  birthPlace: 'Russia',
                  birthDate: '1971-04-17',
                  height: '75 inches',
                  gender: 'male',
                  nationality: 'Russian',
                  telephone: '+7(916) 215-1508',
                  url: 'https://vladimirvostrikov.com',
                  sameAs: [
                    'https://www.facebook.com/vladimir.vs.39/',
                    'https://www.linkedin.com/in/vladimir-vostrikov-7944b040/',
                    'https://www.instagram.com/vladimir_vs99/',
                  ],
                }),
              ]}
            />
            <PersistentDrawerLeft />
          </div>
        </BrowserRouter>
      </DarkThemeProvider>
    </Router>
  );
}

export default App;
