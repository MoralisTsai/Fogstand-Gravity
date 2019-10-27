import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Reset, Base } from 'styles/vendor';

import { App } from './App';

const HMRApp = hot(App);

ReactDOM.render(
  <>
    <Reset />
    <Base />
    <HMRApp />
  </>,
  document.getElementById('root'),
);
