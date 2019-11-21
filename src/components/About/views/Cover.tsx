import React from 'react';

import { CoverLogo } from 'components/_Shared/CoverLogo';

import {
  CoverWrapper,
  CoverTitle,
} from 'styles/Article';

export const Cover: React.FC<{}> = () => (
  <CoverWrapper
    background="https://res.cloudinary.com/defykcau3/image/upload/q_auto/v1573259914/workshop-2_gzt6yq.jpg"
  >
    <CoverTitle>
      工作坊簡介
    </CoverTitle>
    <CoverLogo />
  </CoverWrapper>
);
