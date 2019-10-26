import { css } from 'styled-components';
import { FontSize } from 'styles/Font';

import { responsive } from './responsive';

export const getFontSize = (size?: keyof typeof FontSize) => {
  if (size === 'MEGA_LARGE') {
    return css`
      font-size: ${FontSize.MEGA_LARGE};
    `;
  }

  if (size === 'EXTRA_LARGE') {
    return css`
      font-size: ${FontSize.EXTRA_LARGE};

      ${responsive.tablet`
        font-size: 1.875rem;
      `}
    `;
  }

  if (size === 'LARGE') {
    return css`
      font-size: ${FontSize.LARGE};

      ${responsive.mobile`
        font-size: 1.5rem;
      `}
    `;
  }

  if (size === 'NORMAL') {
    return css`
      font-size: ${FontSize.NORMAL};

      ${responsive.mobile`
        font-size: 1.125rem;
      `}
    `;
  }

  if (size === 'SMALL') {
    return css`
      font-size: ${FontSize.SMALL};
    `;
  }

  if (size === 'EXTRA_SMALL') {
    return css`
      font-size: ${FontSize.EXTRA_SMALL};
    `;
  }

  return css`
    font-size: ${FontSize.NORMAL};
  `;
};
