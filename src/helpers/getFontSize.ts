import { css } from 'styled-components';
import { FontSize } from 'styles/Font';

import { responsive } from './responsive';

export const getFontSize = (size?: keyof typeof FontSize) => {
  if (size === 'LARGE') {
    return css`
      font-size: ${FontSize.LARGE};

      ${responsive.tablet`
        font-size: 2rem;
      `}

      ${responsive.mobile`
        font-size: 1.5rem;
      `}
    `;
  }

  if (size === 'NORMAL') {
    return css`
      font-size: ${FontSize.NORMAL};

      ${responsive.tablet`
        font-size: 1rem;
      `}
    `;
  }

  if (size === 'SMALL') {
    return css`
      font-size: ${FontSize.SMALL};
    `;
  }

  return css`
    font-size: ${FontSize.NORMAL};
  `;
};
