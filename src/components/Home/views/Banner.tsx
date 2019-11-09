import React from 'react';
import styled from 'styled-components';

import { getFontSize } from 'helpers';
import { FontWeight, Color } from 'styles';

/** Style */

const Wrapper = styled.div`
  position: relative;
`;

const Parallax = styled.div`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259914/sub-1_pf2pgl.jpg');
  min-height: 570px;
  background-attachment: fixed;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  background-color: ${Color.WHITE};
  padding: 30px;
  position: absolute;
  left: 50px;
  bottom: 50px;
  max-width: 500px;
  text-align: center;
`;

const InnerText = styled.h4`
  ${getFontSize('NORMAL')};
  font-weight: ${FontWeight.BOLD};
  margin-bottom: 15px;
`;

const QuoteBy = styled.p`
  ${getFontSize('SMALL')};
  font-weight: ${FontWeight.LIGHT};
`;

/** End */

export const Banner = () => {
  return (
    <Wrapper>
      <Parallax />
      <ContentWrapper>
        <InnerText>
          我希望能藉由立霧工作坊這個平臺，將我腦袋中的東西掏出來分享給家鄉的居民，期望他們在未來能為自己創造一片天
        </InnerText>
        <QuoteBy>
          - 陳雯俐 -
        </QuoteBy>
      </ContentWrapper>
    </Wrapper>
  );
}
