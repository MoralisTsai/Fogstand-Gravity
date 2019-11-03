import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { wei } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Wei: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={wei.name}
        header={wei.header}
        description={wei.description}
        coverImg={wei.cover}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {wei.preface}
        </PrefaceWrapper>
        {
          wei.content.map((current, index) => (
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
