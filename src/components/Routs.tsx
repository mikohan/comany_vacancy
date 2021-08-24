import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontEndPage from './FrontEndPage';
import FullStackPage from './FullStackPage';
import LinuxPage from './LinuxPage';
import MarketingPage from './MarketingPage';
import PersonalityPage from './PersonalityPage';
import HobbiesPage from './HobbiesPage';
import Page_404 from './Page_404';
import HomePageSecond from './HomePageSecond';
import Posts from './blog/Posts';
import Post from './blog/Post';
import PortfolioPage from './PortfolioPage';
import CertPage from './CertificatePage';
import ContactsPage from './ContactsPage';
import CategoryManager from './CategoryManager';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/frontend" component={FrontEndPage} />
        <Route exact path="/categoryManager" component={CategoryManager} />
        <Route exact path="/certificates" component={CertPage} />
        <Route exact path="/fullstack" component={FullStackPage} />
        <Route exact path="/linux" component={LinuxPage} />
        <Route exact path="/marketing" component={MarketingPage} />
        <Route exact path="/personality" component={PersonalityPage} />
        <Route exact path="/hobbies" component={HobbiesPage} />
        <Route exact path="/blog" component={Posts} />
        <Route exact path="/blog/:id" component={Post} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/" component={HomePageSecond} />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
}

export default Routes;
