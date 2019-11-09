import { css } from 'styled-components';
import { FontSize } from 'styles/Font';

import { responsive } from './responsive';

export const getFontSize = (size?: keyof typeof FontSize) => {
  if (size === 'S3') {
    return css`
      font-size: ${FontSize.S3};
    `;
  }

  if (size === 'S6') {
    return css`
      font-size: ${FontSize.S6};
    `;
  }

  if (size === 'S7') {
    return css`
      font-size: ${FontSize.S7};
    `;
  }

  return css`
    font-size: ${FontSize.S6};
  `;
};
