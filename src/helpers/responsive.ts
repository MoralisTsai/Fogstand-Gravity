import { css } from 'styled-components';

export const responsive = {
  mobile: (...args: any) => css`
    @media (max-width: 425px) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  tablet: (...args: any) => css`
    @media (max-width: 768px) {
      // @ts-ignore
      ${css(...args)}
    }
  `,
  laptop: (...args: any) => css`
    @media (max-width: 1024px) {
    // @ts-ignore
      ${css(...args)}
    }
  `,
};
