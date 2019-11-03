import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Url } from 'ts/Url';

import { Home } from './components/Home';
import { About } from './components/About';
import { Epilogue } from './components/Epilogue';
import { Editor } from './components/Editor';
import {
  Wenli,
  Darren,
  Jiang,
  Wei,
  Man,
  Wang,
} from './components/Story';

export const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={Url.WENLI}
      >
        <Wenli />
      </Route>
      <Route
        path={Url.DARREN}
      >
        <Darren />
      </Route>
      <Route
        path={Url.JIANG}
      >
        <Jiang />
      </Route>
      <Route
        path={Url.WEI}
      >
        <Wei />
      </Route>
      <Route
        path={Url.MAN}
      >
        <Man />
      </Route>
      <Route
        path={Url.WANG}
      >
        <Wang />
      </Route>
      <Route
        path={Url.ABOUT}
      >
        <About />
      </Route>
      <Route
        path={Url.EPILOGUE}
      >
        <Epilogue />
      </Route>
      <Route
        path={Url.EDITOR}
      >
        <Editor />
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
