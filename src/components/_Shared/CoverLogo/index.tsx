import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Color, FontWeight } from 'styles';
import { responsive } from 'helpers';

import { Url } from 'ts/Url';

/** Style */

const Wrapper = styled.span`
  border: 1px solid ${Color.WHITE};
  padding: 8px;
  font-size: 1.8rem;
  font-weight: ${FontWeight.BOLD};
  position: absolute;
  top: 50px;
  left: 50px;
  color: ${Color.WHITE};
  z-index: 100;
  line-height: 1.3;

  ${responsive.mobile`
    left: 20px;
    top: 20px;
  `}
`;

/** End */

export const CoverLogo: React.FC<{}> = () => (
  <Link
    to={Url.HOME}
  >
    <Wrapper>
      立新
      <br />
      引力
    </Wrapper>
  </Link>
);
