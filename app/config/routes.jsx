import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

const routes = (
  <Route path="/" component={Main} >
    <IndexRoute component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
);

export default routes;
