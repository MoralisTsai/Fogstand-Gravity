import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { darren } from './static';
import { withStory } from './hoc/withStory';

import { ContentInnerText } from 'components/_Shared/Story';
import { Figure } from 'components/_Shared/Figure';
import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

const Darren: React.FC<{}> = () => {
  return (
    <>
      {
        darren.content.slice(0, 2).map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <Figure
        url="https://res.cloudinary.com/defykcau3/image/upload/v1573259917/darren-2_h2euxk.jpg"
        caption="Darren將務實的陳雯俐比喻為向心力，理想化的自己則是離心力， 他覺得這種向內吸收與向外擴張的交互作用，會產生張力或緊張的氣氛，進而衍生出積極的工作模式。"
      />
      {
        darren.content.slice(2).map((current, index) => (
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
          text: '陳雯俐',
          path: Url.WENLI,
        }}
        right={{
          text: '江姊',
          path: Url.JIANG,
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
      character={darren}
      customWidth="500px"
    />
  ),
  withStory,
)(Darren);
