import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainScreen from './screens/main/main';

import Server from './Server';

// eslint-disable-next-line no-new
new Server();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainScreen} />
      </Switch>
    </Router>
  );
}
