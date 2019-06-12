import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Home from '../pages/Home';

import {
  rootAppPath,
} from '../utils/paths';

export default () => (
  <Router>
    <Switch>
      <Route exact path={rootAppPath} component={Home} />
    </Switch>
  </Router>
);
