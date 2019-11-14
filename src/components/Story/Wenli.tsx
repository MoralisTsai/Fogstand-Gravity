import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { wenli } from './static';
import { withStory } from './hoc/withStory';

import { Figure } from 'components/_Shared/Figure';
import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

import { ContentInnerText } from './styles/Common';

const Wenli: React.FC<{}> = () => {
  return (
    <>
      {
        wenli.content.slice(0, 4).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <Figure
        url="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/distance_1_oj4jtv.jpg"
        caption="《The Distance Between》系列的攝影作品是陳雯俐在就讀蘇格蘭格拉斯哥藝術學院時的畢業製作，由自身的生長環境跟家庭背景開始，探討臺灣三代女性，不同的教育、生活背景的故事。陳雯俐出國留學正值三十歲，她認為三十歲對亞洲女人來說是個關卡， 很多人會開始問她怎麼還不結婚生子、怎麼沒有穩定的工作、為什麼要自己跑到國外。因此，陳雯俐決定以三十歲作為基準點，探討她自己、母親、祖母這三個世代，分別在三十歲的時候都做了什麼事情、 有什麼樣的思考邏輯等等，最後再用視覺的方式呈現出她們之間的差異。"
      />
      {
        wenli.content.slice(4).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <ArticleEnd />
      <InnerNav
        right={{
          text: 'Darren Tesar',
          path: Url.DARREN,
        }}
      />
    </>
  )
}

export default compose(
  <P extends {}>(
    BaseComponent: React.ComponentType<P>,
  ): React.FC<P> => (props) => (
    <BaseComponent
      {...props}
      character={wenli}
    />
  ),
  withStory,
)(Wenli);
