import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FrontEndPage from './FrontEndPage';
import BackEndPage from './BackEndPage';
import SysAdminPage from './SysAdminPage';
import MarketingPage from './MarketingPage';
import PersonalityPage from './PersonalityPage';
import HobbiesPage from './HobbiesPage';
import Page_404 from './Page_404';
import AboutPageTest from './AboutPageTest';
import Posts from './blog/Posts';
import Post from './blog/Post';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/frontend" component={FrontEndPage} />
        <Route exact path="/backend" component={BackEndPage} />
        <Route exact path="/computers" component={SysAdminPage} />
        <Route exact path="/test" component={AboutPageTest} />
        <Route exact path="/marketing" component={MarketingPage} />
        <Route exact path="/personality" component={PersonalityPage} />
        <Route exact path="/hobbies" component={HobbiesPage} />
        <Route exact path="/blog" component={Posts} />
        <Route exact path="/blog/:id" component={Post} />
        <Route exact path="/testpage" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/" component={AboutPageTest} />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
}

export default Routes;
