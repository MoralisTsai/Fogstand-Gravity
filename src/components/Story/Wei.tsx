import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { wei } from './static';
import { withStory } from './hoc/withStory';

import { Figure } from 'components/_Shared/Figure';
import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

import { ContentInnerText } from './styles/Common';

const Wei: React.FC<{}> = () => {
  return (
    <>
      {
        wei.content.slice(0, 4).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <Figure
        url="https://res.cloudinary.com/defykcau3/image/upload/q_auto/v1573259915/dxw-1_g1wdks.jpg"
        caption="對於未來，鄧曉蔚仍然持續摸索著，學會為自己負責的她，希望能把握每次學習的機會，並能充實自己在各方面的能力、累積自己的資本。"
      />
      {
        wei.content.slice(4).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <ArticleEnd />
      <InnerNav
        left={{
          text: '江姊',
          path: Url.JIANG,
        }}
        right={{
          text: '張恩滿',
          path: Url.MAN,
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
      character={wei}
    />
  ),
  withStory,
)(Wei);
