import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import { Element as ScrollEl } from 'react-scroll';

import { getFontSize, responsive } from 'helpers';
import { FontWeight } from 'styles';
import { useAnimateScroll } from 'hooks';

import { getCharacters } from '../helpers/getCharacters';

/** Style */

const Wrapper = styled(ScrollEl)`
  position: relative;
  max-width: 1440px;
  margin: auto;
  padding: 0 50px;

  ${responsive.mobile`
    padding: 0 20px;
  `}
`;

const Title = styled.h3`
  ${getFontSize('LARGE')};
  font-weight: ${FontWeight.BOLD};
  text-align: center;
  margin-bottom: 50px;
`;

const PosedContent = posed.div({
  visible: {
    opacity: 1,
    bottom: 0,
  },
  hidden: {
    opacity: 0,
    bottom: -50,
  },
})

const ContentWrapper = styled(PosedContent)`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/v1573259913/DotTest_sf6eyl.png');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  max-width: 1280px;
  margin: auto;
  position: relative;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  ${responsive.tablet`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:not(:last-of-type) {
      margin: 0;
      margin-bottom: 40px;
    }
  `}
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 300px;

  &:not(:last-of-type) {
    margin-right: 30px;
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
  }

  a {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    &:hover {
      img {
        transform: translateY(-8px);
      }
    }
    span {
      font-weight: ${FontWeight.BOLD};
      margin-bottom: 20px;
      text-align: center;
      line-height: 1.5;
      display: block;

      ${responsive.tablet`
        text-decoration: underline;
      
      `}
    }

  }


  ${responsive.tablet`
    max-width: 500px;
    &:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  `}
`;


/** End */

export const Character: React.FC<{}> = () => {
  const [isDisplay, el] = useAnimateScroll(400);
  return (
    <Wrapper
      name="js-character"
    >
      <Title>
        人物介紹
      </Title>
      <ContentWrapper
        ref={el}
        pose={isDisplay ? 'visible' : 'hidden'}
      >
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
                      <span>
                        {current.name}
                        <br />
                        {current.title}
                      </span>
                    </Link>
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
