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
`;

interface MenuItemProps {
  isRightSide?: boolean;
}

const MenuItem = styled.li`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.BOLD};
  cursor: pointer;
  padding: 5px 25px;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${Color.COD_GRAY};
    transform: scaleX(0);
    transform-origin: 50%;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: white;
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    transform: scaleX(1);
  }

  &:not(:last-of-type) {
    margin-right: 100px;
  }

  ${(props: MenuItemProps) => props.isRightSide && css`
    margin-left: 100px;
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