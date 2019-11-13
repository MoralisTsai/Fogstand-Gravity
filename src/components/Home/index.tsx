import React from 'react';
import styled from 'styled-components';

import { responsive } from 'helpers';
import { Footer } from 'components/_Shared/Footer';

import {
  Menu,
  Cover,
  Introduction,
  GalleryIntro,
  Banner,
  Character,
  Epilogue,
} from './views';

/** Style */

const BlockWrapper = styled.div`
  margin-bottom: 50px;

  ${responsive.tablet`
    margin-bottom: 40px;
  `}

  ${responsive.mobile`
    margin-bottom: 30px;
  `}
`;

/** End */

export const Home: React.FC<{}> = () => {
  React.useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <BlockWrapper>
        <Cover />
      </BlockWrapper>
      <BlockWrapper>
        <Introduction />
      </BlockWrapper>
      <BlockWrapper>
        <GalleryIntro />
      </BlockWrapper>
      <BlockWrapper>
        <Banner />
      </BlockWrapper>
      <BlockWrapper>
        <Character />
      </BlockWrapper>
      <BlockWrapper>
        <Epilogue />
      </BlockWrapper>
      <Footer />
    </div>
  )
};
