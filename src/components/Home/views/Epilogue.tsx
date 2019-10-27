import React from 'react';
import styled from 'styled-components';

import Cover from 'assets/post-1.jpg';

import { getFontSize } from 'helpers';
import { FontWeight, Color } from 'styles';

/** Style */

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
`;

const CoverWrapper = styled.div`
  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-position: 34%;
  background-size: cover;
  flex: 2 1 512px;
`;

const ContentWrapper = styled.div`
  flex: 1 1 512px;
  padding: 20px 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Title = styled.h3`
  ${getFontSize('EXTRA_LARGE')};
  margin-bottom: 30px;
  font-weight: ${FontWeight.BOLD};
  text-align: center;
`;

const InnerText = styled.p`
  ${getFontSize('SMALL')};
  font-weight: ${FontWeight.THIN};
  line-height: 2;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  border: 1px solid ${Color.COD_GRAY};
  padding: 2px 15px;
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.LIGHT};
  cursor: pointer;
`;


/** End */

export const Epilogue = () => {
  return (
    <Wrapper>
      <CoverWrapper />
      <ContentWrapper>
        <Title>
          後記
        </Title>
        <InnerText>
          因為一場演講認識了陳雯俐，她那積極於回饋村落的態度，激發了我們對她的好奇，因此我們於二○一五年的五月開始深入嘉里村，探訪了立霧工作坊以及在立霧工作坊所接觸到的人、事、物， 並決定將這難得且特別的經歷撰寫成冊。這裡沒有過多的裝飾，取而代之的是它溫馨且沒有距離感的氣氛，這跟我們以往去過的藝廊或是藝術工作室是完全不一樣的。立霧工作坊是少數不以商業利益為主要考量的工作坊，它以當代藝術為媒介，將西方的藝術帶入嘉里村，並結合在地文化，以分享的方式與當地居民互動。身為半個原住民的工作坊創辦人陳雯俐，秉持著回饋、分享的想法， 撐起了整個立霧工作坊，讓現代與歷史在這裡相會，使村民在看見新事物之餘，同時也能想起家鄉最初的面貌。
        </InnerText>
        <ReadMoreButton>
          閱讀更多
        </ReadMoreButton>
      </ContentWrapper>
    </Wrapper>
  );
}
