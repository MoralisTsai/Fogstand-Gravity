import React from 'react';
import styled from 'styled-components';

import { Color, FontWeight } from 'styles';
import { getFontSize } from 'helpers';
import Avatar from 'assets/front-cover.jpg';

/** Style */

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 20px;
`;

const Title = styled.h3`
  ${getFontSize('MEGA_LARGE')};
  font-weight: ${FontWeight.BOLD};
  text-align: center;
  margin-bottom: 30px;
`;

const InnerParagraph = styled.p`
  ${getFontSize('SMALL')};
  font-weight: ${FontWeight.THIN};
  line-height: 2;
  text-align: justify;
  max-width: 900px;
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

export const GalleryIntro = () => {
  return (
    <Wrapper>
      <Title>
        工作坊簡介
      </Title>
      <InnerParagraph>
        通往花蓮機場的主要道路上，砂石車、汽車呼嘯而過。看著地圖上的指示，我們沿著花蓮某大賣場旁的小巷，走進了名為嘉里村的小村落。嘉里村在日據時代被稱作「加禮宛」，是著名的「加禮宛事件」發生地點——最初宜蘭的噶瑪蘭族遷居至加禮宛，後來被漢人佔據土地，他們與撒奇萊雅族聯合抗清但卻失敗，導致土地被佔，再加上阿美族勢力日益壯大，因此今日的嘉里村以阿美族人口居多。這邊的道路窄窄的、樓房都不高，沒有過多的汽機車，有的是純樸的氛圍，許多村民甚至擺出椅子與小板凳，在自己住家樓下聊起天來。我們看著地圖，卻怎麼也找不到立霧工作坊，詢問村民後才發現，原來它隱身在巷弄裡更小的巷子中。
      </InnerParagraph>
      <ReadMoreButton>
        閱讀更多
      </ReadMoreButton>
    </Wrapper>
  );
};
