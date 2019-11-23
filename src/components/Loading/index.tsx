import React from 'react';
import styled from 'styled-components';
import LoadingIcon from 'assets/loading.gif';

import { Color } from 'styles';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${Color.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => (
  <Wrapper>
    <img
      src={LoadingIcon}
    />
  </Wrapper>
);
