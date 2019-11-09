import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

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
  ${getFontSize('S3')};
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
    font-weight: ${FontWeight.BOLD};
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.5;
  }
`;


/** End */

export const Character = () => {
  const [isDisplay, setDisplay] = React.useState(false);
  const el = React.useRef(null);
  React.useEffect(() => {
    const scrollAction = () => {
      const position = el.current.getBoundingClientRect().top;

      setDisplay(position < 400);
    };

    window.addEventListener('scroll', scrollAction);

    return (() => {
      window.removeEventListener('scroll', scrollAction);
    })
  }, []);
  return (
    <Wrapper>
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
