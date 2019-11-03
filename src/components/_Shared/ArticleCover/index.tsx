import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

import { CoverLogo } from 'components/_Shared/CoverLogo';

import { ArticleCoverProps } from './ts/ArticleCover';

/** Style */

interface CoverProps {
  backgroundImage?: any;
}

const Cover = styled.div`
  background: ${(props: CoverProps) => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 70px;

  &::after {
    content: "";
    background-color: ${Color.COD_GRAY};
    opacity: .5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

interface CoverContentProps {
  customWidth?: string;
}

const CoverContent = styled.div`
  background-color: ${rgba(Color.COD_GRAY, 0.3)};
  padding: 25px 20px;
  color: ${Color.WHITE};
  text-align: center;
  position: relative;
  z-index: 100;
  max-width: 500px;
  max-width: ${(props: CoverContentProps) => (props.customWidth ? props.customWidth : '560px')};
  width: 100%;
`;

const CoverHeading = styled.h2`
  ${getFontSize('EXTRA_LARGE')};
  font-weight: ${FontWeight.BOLD};
  margin-bottom: 10px;
`;

const CoverSubHeading = styled.h3`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.REGULAR};
  margin-bottom: 25px;
`;

const CoverInner = styled.p`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.THIN};
  position: relative;
  white-space: normal;

  &::before {
    content: "";
    background-color: ${Color.WHITE};
    position: absolute;
    top: -10px;
    left: 46%;
    height: 3px;
    width: 40px;

  }
`;

/** End */

export const ArticleCover: React.FC<ArticleCoverProps> = (props) => {
  const {
    name,
    header,
    coverImg,
    description,
    customWidth,
  } = props;
  return (
    <>
      <Cover
        backgroundImage={coverImg}
      >
        <CoverLogo />
        <CoverContent
          customWidth={customWidth}
        >
          <CoverHeading>
            {name}
          </CoverHeading>
          <CoverSubHeading>
            {header}
          </CoverSubHeading>
          <CoverInner>
            {description}
          </CoverInner>
        </CoverContent>
      </Cover>
    </>
  )
}
