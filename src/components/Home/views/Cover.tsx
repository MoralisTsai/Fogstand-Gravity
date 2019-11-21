import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Color, FontWeight } from 'styles';

import { responsive } from 'helpers';

/** Style */

const Wrapper = styled.div`
  position: relative;
`;

const OuterWrapper = styled.div`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/q_30/v1573259914/front-cover_hxcg1b.jpg');
  background-size: cover;
  min-height: calc(100vh - 140px);
  position: relative;

  ${responsive.tablet`
    min-height: calc(100vh - 116px);
  `}

  ${responsive.mobile`
    min-height: calc(100vh - 92px);
  `}
`;

export const TitleSlide = keyframes`
  from {
    opacity: 0;
    bottom: 0;
  }

  to {
    opacity: 1;
    bottom: 50px;
  }
`;

export const TitleSlideLaptop = keyframes`
  from {
    opacity: 0;
    bottom: 0;
  }

  to {
    opacity: 1;
    bottom: 40px;
  }
`;

export const TitleSlideMobile = keyframes`
  from {
    opacity: 0;
    top: 40%;
    transform: translate(-50%, -40%);
  }

  to {
    opacity: 1;
    top: 50%;
    transform: translate(-50%, -50%);
  }
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
  animation: ${TitleSlide} 1000ms ease-in-out;

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
    animation: ${TitleSlideLaptop} 1000ms ease-in-out;
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
    animation: ${TitleSlideMobile} 1000ms ease-in-out;
  `}
`;

/** End */

export const Cover: React.FC<{}> = () => (
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
