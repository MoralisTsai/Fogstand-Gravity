import styled from 'styled-components';
import { rgba } from 'polished';

import { getFontSize } from 'helpers';
import { Color } from 'styles';

export const ReadMoreButton = styled.span`
  border: 1px solid ${Color.COD_GRAY};
  padding: 2px 15px;
  cursor: pointer;
	transition: all 0.8s;
	position: relative;
	overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${rgba(Color.COD_GRAY, 0.9)};
    transition: all 0.3s;
    transform: translate(0,-100%);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  a {
    z-index: 100;
    position: relative;
  }

  &::after {
    transition-delay: 0.2s;
  }

  &:hover {
    color: ${Color.WHITE};
    &::before,
    &::after {
      transform: translate(0,0);
    }
  }
`;
