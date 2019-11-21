import React from 'react';

import { Footer } from 'components/_Shared/Footer';

import {
  Cover,
  Content,
} from './views';

const Epilogue: React.FC<{}> = () => (
  <>
    <Cover />
    <Content />
    <Footer />
  </>
);

export default Epilogue;
