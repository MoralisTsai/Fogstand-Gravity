import { createGlobalStyle } from 'styled-components';

import { getFontSize } from 'helpers';
import { FontWeight, Color } from 'styles';

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
    line-height: 2;
    ${getFontSize('S6')};
    letter-spacing: 3px;
    font-weight: ${FontWeight.THIN};
    color: ${Color.COD_GRAY};
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
    text-decoration: none;
  }
`;
