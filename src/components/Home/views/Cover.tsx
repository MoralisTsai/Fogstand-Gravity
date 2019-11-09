import React from 'react';
import styled from 'styled-components';

import { Color, FontWeight } from 'styles';

import { FadeInUp } from 'styles/Animation';

/** Style */

const OuterWrapper = styled.div`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259914/front-cover_hxcg1b.jpg');
  background-size: cover;
  min-height: calc(100vh - 140px);
  position: relative;
`;

const InnerContent = styled.div`
  padding: 25px 50px;
  position: absolute;
  bottom: 30px;
  left: 50px;
  text-align: center;
  animation: ${FadeInUp} 1500ms ease-in-out;
`;

const Title = styled.h2`
  font-size: 5rem;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  line-height: 1;
  margin-bottom: 20px;
  text-align: left;

  span {
    display: block;
    &:first-of-type {
      background-color: ${Color.WHITE};
      color: ${Color.COD_GRAY};
      padding: 10px;
    }
  }
`;

/** End */

export const Cover = () => {
  return (
    <>
      <OuterWrapper />
      <InnerContent>
        <Title>
          <span>
            FOGSTAND
          </span>
          <span>
            GRAVITY
          </span>
        </Title>
      </InnerContent>
    </>
  );
};
