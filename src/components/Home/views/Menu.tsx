import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { scroller } from 'react-scroll';

import { Color, FontWeight } from 'styles';
import { getFontSize, responsive } from 'helpers'

/** Style */

const Wrapper = styled.nav`
  background-color: ${Color.WHITE};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  padding: 0 20px;
  position: relative;
  z-index: 100;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureBlock = styled.li`
  ${getFontSize('LARGE')};
  line-height: 1.5;
  background-color: ${Color.COD_GRAY};
  padding: 10px 20px;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  box-shadow: 2px 1px 8px ${rgba(Color.COD_GRAY, 0.4)};
  flex-shrink: 0;
`;

interface MenuItemProps {
  isRightSide?: boolean;
}

const MenuItem = styled.li`
  font-weight: ${FontWeight.BOLD};
  cursor: pointer;
  padding: 5px 25px;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  ${responsive.tablet`
    display: none;
  `}

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

    ${responsive.laptop`
      margin-right: 50px;
    `}
  }

  ${(props: MenuItemProps) => props.isRightSide && css`
    margin-left: 100px;

    ${responsive.laptop`
      margin-left: 50px;
    `}
  `}
`;

/** End */

export const Menu: React.FC<{}> = () => {
  const menuItemClickAction = (name: string) => {
    scroller.scrollTo(name, {
      duration: 1500,
      smooth: true,
    });
  }
  return (
    <Wrapper>
      <ListWrapper>
        <MenuItem>
          首頁
        </MenuItem>
        <MenuItem
          onClick={() => menuItemClickAction('js-introduction')}
        >
          簡介
        </MenuItem>
        <FeatureBlock>
          立新
        <br />
          引力
        </FeatureBlock>
        <MenuItem
          isRightSide
          onClick={() => menuItemClickAction('js-character')}
        >
          人物
        </MenuItem>
        <MenuItem
          onClick={() => menuItemClickAction('js-epilogue')}
        >
          後記
        </MenuItem>
      </ListWrapper>
    </Wrapper>
  );
};
