import React from 'react';

import { CoverLogo } from 'components/_Shared/CoverLogo';

import {
  CoverWrapper,
  CoverTitle,
} from 'styles/Article';

export const Cover: React.FC<{}> = () => (
  <CoverWrapper
    background="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/post-main-1_qmoph9.jpg"
  >
    <CoverTitle>
      後記
    </CoverTitle>
    <CoverLogo />
  </CoverWrapper>
);
