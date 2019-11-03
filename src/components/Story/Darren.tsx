import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { darren } from 'static';

import {
  ContentWrapper,
  ContentInnerText,
  PrefaceWrapper,
} from 'components/_Shared/Story';

export const Darren: React.FC<{}> = () => {
  return (
    <>
      <ArticleCover
        name={darren.name}
        header={darren.header}
        description={darren.description}
        coverImg={darren.cover}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {darren.preface}
        </PrefaceWrapper>
        {
          darren.content.map((current, index) => (
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
