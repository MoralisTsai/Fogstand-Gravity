import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

import { Url } from 'ts/Url';

/** Style */

const Wrapper = styled.div`
  background-color: ${Color.WHITE};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  padding: 0 20px;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;

`;

const FeatureBlock = styled.div`
  ${getFontSize('LARGE')};
  background-color: ${Color.COD_GRAY};
  padding: 10px 20px;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  margin: auto;
  line-height: 1.5;
`;

/** End */


export const Banner = () => {
  return (
    <Wrapper>
      <Link
        to={Url.HOME}
      >
        <FeatureBlock>
          立新
          <br />
          引力
        </FeatureBlock>
      </Link>
    </Wrapper>
  );
};
