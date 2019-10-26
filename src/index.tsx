import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Reset } from 'styles/vendor/reset';

import App from './App';

const HMRApp = hot(App);

ReactDOM.render(
  <>
    <HMRApp />
    <Reset />
  </>,
  document.getElementById('root'),
);
