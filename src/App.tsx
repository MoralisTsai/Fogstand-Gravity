import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import { Home } from './components/Home';

const App: React.FC<{}> = () => (
  <>
    <Home />
  </>
);

export default hot(App);
