import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { Url } from 'ts/Url';

// import { Home } from './components/Home';
// import { About } from './components/About';
// import { Epilogue } from './components/Epilogue';
// import { Editor } from './components/Editor';
// import {
//   Wenli,
//   Darren,
//   Jiang,
//   Wei,
//   Man,
//   Wang,
// } from './components/Story';

// const Home = React.lazy(() => import('components/Home'));
// const Editor = React.lazy(() => import('components/Editor'));

interface DynamicImportProps {
  load?: () => any;
}

class DynamicImport extends React.Component<DynamicImportProps> {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    return this.props.children(this.state.component)
  }
}

const Home = (props) => (
  <DynamicImport load={() => import('components/Home')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

const Editor = (props) => (
  <DynamicImport load={() => import('components/Editor')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

export const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route
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
      </Route> */}
      {/* <Route
        path={Url.EDITOR}
      >
      <React.Suspense
        fallback={<h1>Loading</h1>}
      >
        <Editor />
      </React.Suspense>
      </Route> */}
      <Route
        path={Url.EDITOR}
        component={Editor}
      />
      <Route
        exact
        path={Url.HOME}
        component={Home}
      />
    </Switch>
  </BrowserRouter>
);
