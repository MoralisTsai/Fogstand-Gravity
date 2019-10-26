import React from 'react';

import { Menu } from './views/Menu';
import { Cover } from './views/Cover';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Menu />
      <Cover />
    </>
  )
};
