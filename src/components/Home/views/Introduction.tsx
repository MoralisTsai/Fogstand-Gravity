import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Element as ScrollEl } from 'react-scroll';

import { FontWeight, Color } from 'styles';
import { getFontSize, responsive } from 'helpers';

import { useAnimateScroll } from 'hooks';

/** Style */

const ImagePosed = posed.div({
  visible: {
    transition: {
      duration: 1500,
    },
    opacity: 1,
    left: 0,
  },
  hidden: {
    opacity: 0,
    left: -20,
  },
});

const Wrapper = styled(ScrollEl)`
  display: flex;
  align-items: stretch;
  flex-flow: row nowrap;
  justify-content: flex-start;
  max-width: 1440px;
  margin: auto;

  ${responsive.tablet`
    flex-flow: column nowrap;
  `}
`;

const ImageWrapper = styled(ImagePosed)`
  background-image: url('https://res.cloudinary.com/defykcau3/image/upload/q_auto/v1573259915/sub-pic-3_cymzyk.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1 1 512px;
  margin-right: 20px;
  position: relative;

  ${responsive.tablet`
    display: none;
  `}
`;

const PosedContent = posed.div({
  visible: {
    transition: {
      duration: 1500,
    },
    opacity: 1,
    bottom: 0,
  },
  hidden: {
    opacity: 0,
    bottom: -50,
  },
});

const ContentWrapper = styled(PosedContent)`
  flex: 1 1 512px;
  padding: 30px 50px;
  position: relative;

  ${responsive.tablet`
    padding: 0 50px;
  `}

  ${responsive.mobile`
    padding: 0 20px;
  `}
`;

const Title = styled.h3`
  ${getFontSize('LARGE')};
  font-weight: ${FontWeight.BOLD};
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const TitleHighlight = styled.span`
  background-color: ${Color.COD_GRAY};
  transform: rotate(-3deg);
  margin-bottom: 20px;
  padding: 5px 25px;
  display: inline-block;
  position: relative;
  color: ${Color.WHITE};

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: rgba(121, 121, 121, 0.4);
    width: 25px;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    right: -10px;
  }

  &::before {
    left: -10px;
  }
`;

const InnerParagraph = styled.p`
  text-align: justify;
`;

/** End */

export const Introduction: React.FC<{}> = () => {
  const [isDisplay, el] = useAnimateScroll(600);

  return (
    <Wrapper
      name="js-introduction"
    >
      <ImageWrapper
        ref={el}
        pose={isDisplay ? 'visible' : 'hidden'}
      />
      <ContentWrapper
        pose={isDisplay ? 'visible' : 'hidden'}
      >
        <Title>
          <TitleHighlight>
            打破現狀
          </TitleHighlight>
          <br />
          立霧讓原住民文化
          <br />
          與當代藝術成为摯友
          <br />
        </Title>
        <InnerParagraph>
          三名來自慈濟大學傳播系的大學生，平日的生活除了採訪，就是玩玩攝影機、剪輯軟體，透過課堂學習，努力將知識轉變為個人能力， 然而緣分讓他們在一次課堂中接觸到當代藝術。原以為當代藝術僅僅與藝術工作者自身相關，但瞭解後才發現，其實它並沒有想像中的遙不可及。當代藝術不僅是門創作學問，更多的是其背後反映的現實生活、社會文化及歷史淵源的實際意義。空間造成的隔離，使位於後山的小鎮與繁榮的大都市出現落差，其中最明顯的便是資訊傳播的速度與其廣度上的差異。生長於後山的陳雯俐， 有機會走出家鄉，探索外面的世界，也因此接觸藝術領域，進而決定作出改變，她不僅期望自己能擴展視野，還將自身所學帶回家鄉，分享給這裡的朋友及民眾，讓大家在看見當代藝術的同時，也不忘自己的文化。這看似渺小卻不可動搖的信念，正是吸引我們前往一探究竟的最大誘因，想見識這談何容易的革新歷程。在這裡的人們，無一不是為自己努力著，尋夢也好、理想也罷，那堅定的步伐是他們的共通點。立霧工作坊就如同行星般，其引力連繫著大家，也給予他們各自成長的空間。這樣的氛圍令我們震撼， 也使我們蛻變，告訴我們該用什麼樣的態度去面對未來。在此，我們希望藉由微薄的一己之力，留住這份感動，並延續給所有看過他們故事的人。
        </InnerParagraph>
      </ContentWrapper>
    </Wrapper>
  );
};
