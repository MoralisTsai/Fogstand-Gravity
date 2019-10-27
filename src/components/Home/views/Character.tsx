import React from 'react';
import styled from 'styled-components';

import AbstractDot from 'assets/DotTest.png';

import { getFontSize } from 'helpers';
import { FontWeight } from 'styles';
import { getCharacters } from '../data/getCharacters';

/** Style */

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
`;

const Title = styled.h3`
  ${getFontSize('EXTRA_LARGE')};
  font-weight: ${FontWeight.BOLD};
  text-align: center;
  margin-bottom: 50px;
`;

const ContentWrapper = styled.div`
  background-image: url(${AbstractDot});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  max-width: 1280px;
  margin: auto;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 300px;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  img {
    border-radius: 50%;
    margin-bottom: 20px;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
  }

  h4 {
    ${getFontSize('EXTRA_SMALL')};
    font-weight: ${FontWeight.BOLD};
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.8;
  }

  p {
    ${getFontSize('SMALL')};
    font-weight: ${FontWeight.THIN};
    line-height: 2;
  }
`;


/** End */

export const Character = () => {
  return (
    <Wrapper>
      <Title>
        人物介紹
      </Title>
      <ContentWrapper>
        {
          getCharacters().map((author, index) => (
            <RowWrapper
              key={index.toString()}
            >
              {
                author.map((current, authorIndex) => (
                  <ItemWrapper
                    key={authorIndex.toString()}
                  >
                    <img
                      src={current.profile}
                    />
                    <h4>
                      {current.name}
                      <br />
                      {current.title}
                    </h4>
                    <p>
                      {current.info}
                    </p>
                  </ItemWrapper>
                ))
              }
            </RowWrapper>
          ))
        }
      </ContentWrapper>
    </Wrapper>
  );
}
