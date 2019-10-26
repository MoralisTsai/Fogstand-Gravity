import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Color, FontWeight } from 'styles';
import { getFontSize } from 'helpers'



/** Style */

const Wrapper = styled.nav`
  background-color: ${Color.WHITE};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  padding: 0 20px;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureBlock = styled.li`
  ${getFontSize('MEGA_LARGE')};
  background-color: ${Color.COD_GRAY};
  padding: 10px 20px;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  letter-spacing: 3px;
`;

interface MenuItemProps {
  isRightSide?: boolean;
}

const MenuItem = styled.li`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.BOLD};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 150px;
  }

  ${(props: MenuItemProps) => props.isRightSide && css`
    margin-left: 150px;
  `}
`;


/** End */

export const Menu: React.FC<{}> = () => {
  return (
    <Wrapper>
      <ListWrapper>
        <MenuItem>
          首頁
        </MenuItem>
        <MenuItem>
          簡介
        </MenuItem>
        <FeatureBlock>
          立新
        <br />
          引力
        </FeatureBlock>
        <MenuItem
          isRightSide
        >
          人物
        </MenuItem>
        <MenuItem>
          後記
        </MenuItem>
      </ListWrapper>
    </Wrapper>
  );
};
