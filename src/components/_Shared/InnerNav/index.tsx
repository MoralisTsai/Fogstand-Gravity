import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';

import { InnerNavProps } from './ts/InnerNav';

/** Style */

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Item = styled.span`
  ${getFontSize('EXTRA_SMALL')};
  text-decoration: underline;
  color: ${rgba(Color.COD_GRAY, 0.5)};
  font-weight: ${FontWeight.LIGHT};
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

  return (
    <Wrapper>
      <Link
        to={left.path}
      >
        <Item>
          {left.text}
        </Item>
      </Link>
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
