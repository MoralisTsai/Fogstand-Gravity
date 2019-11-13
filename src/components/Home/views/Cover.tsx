import React from 'react';
import styled from 'styled-components';

import { Color, FontWeight } from 'styles';

import { responsive } from 'helpers';

/** Style */

const Wrapper = styled.div`
  position: relative;
`;

const OuterWrapper = styled.div`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259914/front-cover_hxcg1b.jpg');
  background-size: cover;
  min-height: calc(100vh - 140px);
  position: relative;
`;

const Title = styled.h2`
  bottom: 50px;
  color: ${Color.WHITE};
  font-size: 5rem;
  font-weight: ${FontWeight.BOLD};
  left: 50px;
  line-height: 1;
  position: absolute;
  text-align: left;

  span {
    display: block;
    &:first-of-type {
      background-color: ${Color.WHITE};
      color: ${Color.COD_GRAY};
      padding: 10px;
    }
  }

  ${responsive.laptop`
    left: 40px;
    bottom: 40px;
    font-size: 4rem;
  `}

  ${responsive.tablet`
    font-size: 3rem;
  `}

  ${responsive.mobile`
    font-size: 2.5rem;
    text-align: center;
    bottom: initial;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

/** End */

export const Cover = () => {
  return (
    <Wrapper>
      <OuterWrapper />
      <Title>
        <span>
          FOGSTAND
        </span>
        <span>
          GRAVITY
        </span>
      </Title>
    </Wrapper>
  );
};
