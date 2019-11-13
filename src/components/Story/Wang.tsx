import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { wang } from './static';
import { withStory } from './hoc/withStory';

import { ContentInnerText } from 'components/_Shared/Story';
import { Figure } from 'components/_Shared/Figure';
import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

export const Wang: React.FC<{}> = () => {
  return (
    <>
      {
        wang.content.slice(0, 5).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <Figure
        url="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/zw-1_fhbulj.jpg"
        caption="以「眼睛」作為創作主題的作品"
      />
      {
        wang.content.slice(5).map((current, index) => (
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
          text: '張恩滿',
          path: Url.MAN,
        }}
        right={{
          text: '後記',
          path: Url.EPILOGUE,
        }}
      />
    </>
  )
};

export default compose(
  <P extends {}>(
    BaseComponent: React.ComponentType<P>,
  ): React.FC<P> => (props) => (
    <BaseComponent
      {...props}
      character={wang}
    />
  ),
  withStory,
)(Wang);

