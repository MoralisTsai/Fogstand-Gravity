import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Color, FontWeight } from 'styles';

/** Style */

const Wrapper = styled.span`
  border: 1px solid ${Color.WHITE};
  padding: 8px;
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: ${FontWeight.BOLD};
  position: absolute;
  top: 50px;
  left: 50px;
  color: ${Color.WHITE};
`;

/** End */

export const CoverLogo = () => {
  return (
    <Link
      to="/"
    >
      <Wrapper>
        立新
        <br />
        引力
      </Wrapper>
    </Link>
  );
};
