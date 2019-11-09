import styled from 'styled-components';

import { Color } from 'styles';

export const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  text-align: justify;
`;

export const PrefaceWrapper = styled.p`
  columns: 140px 2;
  column-gap: 20px;
  background: none;
  padding: 40px 0;
  text-align: justify;
  position: relative;
  margin: 50px auto 40px;
  font-weight: 700;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: ${Color.COD_GRAY};
    height: 1px;
    width: 50%;
    left: 30%;
    top: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background: ${Color.COD_GRAY};
    height: 1px;
    width: 50%;
    left: 30%;
    bottom: 0;
  }
`;

export const ContentInnerText = styled.p`
  text-indent: 30px;
  margin-bottom: 20px;
`;
