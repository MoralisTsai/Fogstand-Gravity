import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { jiang } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Jiang: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={jiang.name}
        header={jiang.header}
        description={jiang.description}
        coverImg={jiang.cover}
        customWidth="450px"
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {jiang.preface}
        </PrefaceWrapper>
        {
          jiang.content.map((current, index) => (
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
