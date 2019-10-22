import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: orange;
`;

export const Hello: React.FC<{}> = () => (
  <Wrapper>
    <h1>Apple pay</h1>
  </Wrapper>
);
