import { createGlobalStyle } from 'styled-components';

import { getFontSize } from 'helpers';
import { FontWeight } from 'styles';

export const Base = createGlobalStyle`
  * {
    &,
    &:before,
    &:after {
      vertical-align: top;
      box-sizing: border-box;
    }
  }

  html body {
    font-family: 'Noto Sans TC', sans-serif;
    line-height: 1.5;
    font-weight: ${FontWeight.REGULAR};
    ${getFontSize('NORMAL')};
    letter-spacing: 3px;
  }

  ul {
    margin: 0;
    padding: 0;
    outline: none;
    li {
      list-style: none;
    }
  }

  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
    }
  }
`;
