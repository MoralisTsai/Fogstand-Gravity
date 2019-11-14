import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles';

/** Style */

const Wrapper = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  border: 1px solid ${Color.COD_GRAY};
  margin: 0 auto 40px;

  &::before {
    content: '';
    background-color: ${Color.COD_GRAY};
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
`;

/** End */

export const ArticleEnd: React.FC<{}> = () => (
  <Wrapper />
);
