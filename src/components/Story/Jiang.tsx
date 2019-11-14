import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { jiang } from './static';
import { withStory } from './hoc/withStory';

import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

import { ContentInnerText } from './styles/Common';

const Jiang: React.FC<{}> = () => {
  return (
    <>
      {
        jiang.content.map((current, index) => (
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
          text: 'Darren Tesar',
          path: Url.DARREN,
        }}
        right={{
          text: '鄧曉蔚',
          path: Url.WEI,
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
      character={jiang}
      customWidth="450px"
    />
  ),
  withStory,
)(Jiang);
