import styled from 'styled-components';
import { rgba } from 'polished';

import { Color, FontWeight } from 'styles';
import { responsive, getFontSize } from 'helpers';

export const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 0 50px;

  ${responsive.mobile`
    padding: 0 20px;
  `}
`;

export const InnerText = styled.p`
  text-indent: 30px;
  text-align: justify;
  margin-bottom: 20px;
`;

interface CoverWrapperProps {
  background: string;
}

export const CoverWrapper = styled.div`
  background-image: ${(props: CoverWrapperProps) => `url(${props.background})`};
  background-size: cover;
  height: 400px;
  position: relative;
  margin-bottom: 50px;

  ${responsive.tablet`
    margin-bottom: 30px;
  `}
`;

export const CoverTitle = styled.h2`
  ${getFontSize('LARGE')};
  padding: 5px 30px;
  background-color: ${rgba(Color.COD_GRAY, 0.3)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  display: inline-block;
`;
