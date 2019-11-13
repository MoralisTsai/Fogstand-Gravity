import React from 'react';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

import { CoverLogo } from 'components/_Shared/CoverLogo';

import { ArticleCoverProps } from './ts/ArticleCover';

/** Style */

const ZoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
`;

const SlideIn = keyframes`
  from {
    opacity: 0;
    bottom: -40;
  }
  to {
    opacity: 1;
    bottom: 0;
  }
`;

const Cover = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 70px;
  overflow: hidden;

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
  animation: ${SlideIn} 1s ease-in-out;
  position: relative;
`;

const CoverHeading = styled.h2`
  ${getFontSize('LARGE')};
  font-weight: ${FontWeight.BOLD};
`;

const CoverSubHeading = styled.h3`
  margin-bottom: 25px;
`;

const CoverInner = styled.p`
  position: relative;
  white-space: normal;
  line-height: 1.5;

  &::before {
    content: "";
    background-color: ${Color.WHITE};
    position: absolute;
    top: -15px;
    left: 46%;
    height: 3px;
    width: 40px;

  }
`;

interface BackgroundProps {
  backgroundImage: string;
}

const Background = styled.div`
  background: ${(props: BackgroundProps) => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${ZoomIn} 15s linear infinite alternate;
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
      <Cover>
        <Background
          backgroundImage={coverImg}
        />
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
