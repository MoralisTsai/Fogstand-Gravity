import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { man } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Man: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={man.name}
        header={man.header}
        description={man.description}
        coverImg={man.cover}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {man.preface}
        </PrefaceWrapper>
        {
          man.content.map((current, index) => (
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
