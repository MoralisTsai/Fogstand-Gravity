import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Reset } from './styles/vendor/reset';

import App from './App';

ReactDOM.render(
  <>
    <App />
    <Reset />
  </>
  , document.getElementById('root'));
