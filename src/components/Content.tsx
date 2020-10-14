import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SomeContent from './SomeContent';
import HomePage from './HomePage';
import FrontEndPage from './FrontEndPage';
import Page_404 from './Page_404';

function Content() {
  return (
    <div>
      <Switch>
        <Route exact path="/frontend" component={FrontEndPage} />
        <Route exact path="/somecontent" component={SomeContent} />
        <Route exact path="/" component={HomePage} />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
}

export default Content;
