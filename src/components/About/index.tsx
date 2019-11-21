import React from 'react';

import { Footer } from 'components/_Shared/Footer';

import {
  Cover,
  Content,
} from './views';

const About: React.FC<{}> = () => (
  <>
    <Cover />
    <Content />
    <Footer />
  </>
);

export default About;
