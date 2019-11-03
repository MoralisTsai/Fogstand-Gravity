import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { wang } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Wang: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={wang.name}
        header={wang.header}
        description={wang.description}
        coverImg={wang.cover}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {wang.preface}
        </PrefaceWrapper>
        {
          wang.content.map((current, index) => (
            <ContentInnerText
              key={index.toString()}
            >
              {current}
            </ContentInnerText>
          ))
        }
      </ContentWrapper>
    </>
  )
}
