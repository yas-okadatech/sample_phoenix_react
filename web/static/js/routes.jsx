import React from 'react';
import { Route } from 'react-router';
import App from './containers/App.jsx';

import Page1 from './containers/Page1.jsx';

export default (
  <Route path="/" component={App}>
    <Route path="/page1"
           component={Page1}/>
  </Route>
);
