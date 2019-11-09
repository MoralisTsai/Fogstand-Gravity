import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

import { InnerNavProps } from './ts/InnerNav';

/** Style */

interface WrapperProps {
  direction?: 'left' | 'right' | 'both';
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  ${(props: WrapperProps) => props.direction === 'left' && css`
    justify-content: flex-start;
  `}

  ${(props: WrapperProps) => props.direction === 'right' && css`
    justify-content: flex-end;
  `}

  ${(props: WrapperProps) => props.direction === 'both' && css`
    justify-content: space-between;
  `}
`;

const Item = styled.span`
  ${getFontSize('EXTRA_SMALL')};
  text-decoration: underline;
  color: ${rgba(Color.COD_GRAY, 0.5)};
`;

/** End */

export const InnerNav: React.FC<InnerNavProps> = (props) => {
  const {
    left,
    right,
  } = props;

  React.useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);

  const checkDirection = () => {
    if (left && right) {
      return 'both';
    }

    if (left) {
      return 'left';
    }

    if (right) {
      return 'right'
    }
  }

  return (
    <Wrapper
      direction={checkDirection()}
    >
      {
        left && (
          <Link
            to={left.path}
          >
            <Item>
              {left.text}
            </Item>
          </Link>
        )
      }
      {
        right && (
          <Link
            to={right.path}
          >
            <Item>
              {right.text}
            </Item>
          </Link>
        )
      }
    </Wrapper>
  );
};
