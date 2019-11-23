import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Url } from 'ts/Url';
import { Loading } from 'components/Loading';

const Home = lazy(() => import('components/Home'));
const About = lazy(() => import('components/About'));
const Epilogue = lazy(() => import('components/Epilogue'));
const Editor = lazy(() => import('components/Editor'));
const Wenli = lazy(() => import('components/Story/Wenli'));
const Darren = lazy(() => import('components/Story/Darren'));
const Jiang = lazy(() => import('components/Story/Jiang'));
const Wei = lazy(() => import('components/Story/Wei'));
const Man = lazy(() => import('components/Story/Man'));
const Wang = lazy(() => import('components/Story/Wang'));

export const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={Url.WENLI}
          component={Wenli}
        />
        <Route
          path={Url.DARREN}
          component={Darren}
        />
        <Route
          path={Url.JIANG}
          component={Jiang}
        />
        <Route
          path={Url.WEI}
          component={Wei}
        />
        <Route
          path={Url.MAN}
          component={Man}
        />
        <Route
          path={Url.WANG}
          component={Wang}
        />
        <Route
          path={Url.ABOUT}
          component={About}
        />
        <Route
          path={Url.EPILOGUE}
          component={Epilogue}
        />
        <Route
          path={Url.EDITOR}
          component={Editor}
        />
        <Route
          exact
          path={Url.HOME}
          component={Home}
        >
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
