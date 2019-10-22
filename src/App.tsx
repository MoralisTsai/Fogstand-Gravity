import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.div`
  color: orange;
`;

const App: React.FC<{}> = () => (
  <Wrapper>
    <h1>Apple pay dd</h1>
  </Wrapper>
);

export default hot(App);
