import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* eslint-disable no-multi-spaces */
import App                    from './app';
import Dashboard              from './dashboard/index';
/* eslint-enable */

// export routes
module.exports = (
  <Route component={App} path="/">
    <IndexRoute component={Dashboard} />
    <Route component={Dashboard} path="dashboard" />
  </Route>
);
