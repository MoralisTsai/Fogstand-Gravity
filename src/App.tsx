import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.div`
  color: black;
`;

const App: React.FC<{}> = () => (
  <Wrapper>
    <h1>Moralis in t kfsdkfdskhe house</h1>
  </Wrapper>
);

export default hot(App);
