import React, {FC} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Topic} from '@Web/Topic';
import {Home} from '@Web/Home';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/topic">
        <Topic />
      </Route>
    </Switch>
  </Router>
);

export default hot(module)(App);
