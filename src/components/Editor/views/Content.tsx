import React from 'react';
import styled from 'styled-components';

import { getFontSize, responsive } from 'helpers';
import { Color, FontWeight } from 'styles';

import { Footer } from 'components/_Shared/Footer';

import { SlideInDown } from 'styles/Animation';

/** Style */

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  padding: 0 50px;

  ${responsive.tablet`
    margin-top: 50px;
  `}
`;

const BlockWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  animation: ${SlideInDown} 1000ms ease-in-out;

  ${responsive.tablet`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

const TitleBlock = styled.div`
  background-color: ${Color.QUILL_GRAY};
  padding: 10px 24px;
  ${getFontSize('LARGE')};
  display: inline-block;
  font-weight: ${FontWeight.BOLD};
  margin-right: 50px;
  flex-shrink: 0;
  line-height: 1.5;

  ${responsive.tablet`
    margin: 0;
    margin-bottom: 50px;
  `}
`;

const EditorList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  ${responsive.tablet`
    flex-direction: column;
  `}
`;

const EditorItem = styled.div`
  max-width: 250px;
  width: 100%;

  ${responsive.tablet`
    max-width: 400px;
  `}

  &:not(:last-of-type) {
    margin-right: 40px;

    ${responsive.tablet`
      margin: 0;
      margin-bottom: 40px;
    `}
  }

  img {
    width: 100%;
    margin-bottom: 15px;
  }
  
  h3 {
    font-weight: ${FontWeight.BOLD};
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }

  h4 {
    font-weight: ${FontWeight.THIN};
    ${getFontSize('SMALL')};
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    text-align: justify;
  }
`;

const RoleList = styled.div`
  width: 100%;
`;

const RoleItem = styled.div`
  display: flex;
  flex-flow: row nowrap;

  ${responsive.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  h3 {
    max-width: 150px;
    width: 100%;

    ${responsive.tablet`
      max-width: initial;
      width: initial;
    `}
  }

  p {
    margin-left: 10px;
    letter-spacing: 1px;

    ${responsive.tablet`
      margin: 0;
      font-weight: ${FontWeight.BOLD};
      text-align: center;
    `}
  }
`;

/** End */


export const Content = () => {
  return (
    <>
      <Wrapper>
        <BlockWrapper>
          <TitleBlock>
            關於
          <br />
            我們
        </TitleBlock>
          <EditorList>
            <EditorItem>
              <img
                alt="avatar"
                src="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/chen-yu-avatar_ywaewv.jpg"
              />
              <h3>
                陳妤
            </h3>
            <h4>
                國考生
            </h4>
              <p>
                畢業於慈濟大學傳播學系，曾經在網拍公司擔任美編，目前正專心地準備國家考試中，現居於臺中市，是個土生土長的臺中人。喜歡閱讀、唱歌、逛展覽，以及製作各種手工藝品。
            </p>
            </EditorItem>
            <EditorItem>
              <img
                alt="avatar"
                src="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/wendy-avatar_l2tpt7.jpg"
              />
              <h3>
                高宜鈴
            </h3>
              <h4>
                研究生
            </h4>
              <p>
                從小在山明水秀的花蓮長大，經由大學四年的洗禮，讓我更深入探索故鄉的美好。目前在世新大學攻讀傳播管理研究所。喜歡攝影與烘焙。
            </p>
            </EditorItem>
            <EditorItem>
              <img
                alt="avatar"
                src="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/moralis-avatar_bgen9n.jpg"
              />
              <h3>
                蔡秋圓
            </h3>
              <h4>
                研究生
            </h4>
              <p>
                來自印尼的僑生，高中畢業後，選擇來到台灣就讀大學，主修影像傳播與訊息設計，目前在臺大網媒所繼續升學中。熱愛攝影、閱讀以及逛展覽。
            </p>
            </EditorItem>
          </EditorList>
        </BlockWrapper>
        <BlockWrapper>
          <TitleBlock>
            特別
          <br />
            感謝
          </TitleBlock>
          <RoleList>
            <RoleItem>
              <h3>
                指導教授
            </h3>
              <p>
                孫維三
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                作者
            </h3>
              <p>
                陳妤 / 高宜鈴 / 蔡秋圓
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                撰述
            </h3>
              <p>
                陳妤 / 高宜鈴
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                校對
            </h3>
              <p>
                陳妤 / 陳雯俐 / 高宜鈴
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                程式設計
            </h3>
              <p>
                蔡秋圓
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                攝影
            </h3>
              <p>
                李瑞霖 / 高宜鈴 / 蔡秋圓
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                圖片來源
            </h3>
              <p>
                立霧工作坊 / 陳雯俐
            </p>
            </RoleItem>
            <RoleItem>
              <h3>
                特別感謝
            </h3>
              <p>
                陳雯俐 / Darren Tesar / 江姊 / 鄧曉蔚 / 張恩滿 / 周王
            </p>
            </RoleItem>
          </RoleList>
        </BlockWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};
