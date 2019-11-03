import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { wenli } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Wenli: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={wenli.name}
        header={wenli.header}
        description={wenli.description}
        coverImg={wenli.cover}
        customWidth="540px"
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {wenli.preface}
        </PrefaceWrapper>
        {
          wenli.content.map((current, index) => (
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
