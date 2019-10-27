import React from 'react';
import styled from 'styled-components';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

/** Style */

const Wrapper = styled.div`
  background-color: ${Color.COD_GRAY};
  color: ${Color.WHITE};
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-weight: ${FontWeight.BOLD};
`;

const HeadlineTtitle = styled.h3`
  ${getFontSize('MEGA_LARGE')};
`;

const HeadlineSubtitle = styled.h4`
  font-size: 0.75rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const LinkItem = styled.p`
  ${getFontSize('SMALL')};
  font-weight: ${FontWeight.BOLD};

  &:not(:last-of-type) {
    margin-right: 50px;
  }
`;

/** End */

export const Footer = () => {
  return (
    <Wrapper>
      <HeadlineWrapper>
        <HeadlineTtitle>
          立新引力
        </HeadlineTtitle>
        <HeadlineSubtitle>
          FOGSTAND GRAVITY
        </HeadlineSubtitle>
      </HeadlineWrapper>
      <LinkWrapper>
        <LinkItem>
          關於我們
        </LinkItem>
        <LinkItem>
          關於立霧
        </LinkItem>
        <LinkItem>
          聯絡我們
        </LinkItem>
      </LinkWrapper>
    </Wrapper>
  )
}
