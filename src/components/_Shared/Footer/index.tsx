import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getFontSize, responsive } from 'helpers';
import { Color, FontWeight } from 'styles';

/** Style */

const Wrapper = styled.div`
  background-color: ${Color.COD_GRAY};
  color: ${Color.WHITE};
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${responsive.tablet`
    flex-direction: column;
    padding: 20px 30px;
  `}
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-weight: ${FontWeight.BOLD};
  line-height: 1.5;

  ${responsive.tablet`
    margin-bottom: 15px;
  `}
`;

const HeadlineTitle = styled.h3`
  ${getFontSize('LARGE')};

  ${responsive.mobile`
    letter-spacing: 12px;
    text-indent: 13px;
  `}
`;

const HeadlineSubtitle = styled.h4`
  font-size: 0.75rem;

  ${responsive.tablet`
    letter-spacing: 1px;
  `}
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  > a:not(:last-of-type) {
    margin-right: 50px;

    ${responsive.tablet`
      margin-right: 30px;
    `}

    ${responsive.mobile`
      margin: 0;
      margin-bottom: 10px;
    `}
  }

  ${responsive.mobile`
    flex-direction: column;
  `}
`;

const LinkItem = styled.span`
  font-weight: ${FontWeight.BOLD};
`;

/** End */

export const Footer: React.FC<{}> = () => (
  <Wrapper>
    <HeadlineWrapper>
      <HeadlineTitle>
        立新引力
      </HeadlineTitle>
      <HeadlineSubtitle>
        FOGSTAND GRAVITY
      </HeadlineSubtitle>
    </HeadlineWrapper>
    <LinkWrapper>
      <Link
        to='/editor'
      >
        <LinkItem>
          關於我們
        </LinkItem>
      </Link>
      <a
        href='https://www.fogstand.com/'
        rel="noopener noreferrer"
        target='_blank'
      >
        <LinkItem>
          關於立霧
        </LinkItem>
      </a>
      <a href='mailto:moralis.tsai@gmail.com'>
        <LinkItem>
          聯絡我們
        </LinkItem>
      </a>
    </LinkWrapper>
  </Wrapper>
);
