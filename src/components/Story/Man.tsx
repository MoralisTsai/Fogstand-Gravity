import React from 'react';

import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { man } from './static';
import { withStory } from './hoc/withStory';

import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

import { ContentInnerText } from './styles/Common';

const Man: React.FC<{}> = () => {
  return (
    <>
      {
        man.content.map((current, index) => (
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
          text: '鄧曉蔚',
          path: Url.WEI,
        }}
        right={{
          text: '周王',
          path: Url.WANG,
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
      character={man}
      customWidth="500px"
    />
  ),
  withStory,
)(Man);
