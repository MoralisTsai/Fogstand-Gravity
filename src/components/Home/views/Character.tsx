import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259913/DotTest_sf6eyl.png');
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
    display: inline-block;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    transition-duration: 0.3s;
    transition-property: transform;
    transition-timing-function: ease-out;

    &:hover {
      transform: translateY(-8px);
    }
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
                    <Link
                      to={current.link}
                    >
                      <img
                        src={current.profile}
                      />
                    </Link>
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
