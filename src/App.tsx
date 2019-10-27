import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';

export const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path='/about'
      >
        <About />
      </Route>
      <Route
        exact
        path='/'
      >
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);
