import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { Color } from 'styles';
import { getFontSize } from 'helpers';

import { FigureProps } from './ts/Figure';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
  }

  figcaption {
    color: ${lighten(0.35, Color.COD_GRAY)};
    ${getFontSize('S7')};
    position: relative;
    padding-top: 20px;

    &::before {
      position: absolute;
      content: '';
      width: 100px;
      background-color: ${Color.AQUA_ISLAND};
      height: 10px;
      top: 0;
      left: 0;
    }
  }
`;

export const Figure: React.FC<FigureProps> = (props) => {
  const {
    url,
    caption
  } = props;

  return (
    <Wrapper>
      <img
        src={url}
        alt="figure"
      />
      <figcaption>
        {caption}
      </figcaption>
    </Wrapper>
  );
};
