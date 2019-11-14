import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles';
import { responsive } from 'helpers';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { Footer } from 'components/_Shared/Footer';

const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: auto;
  text-align: justify;
  padding: 0 50px;

  ${responsive.mobile`
    padding: 0 20px;
  `}
`;

const PrefaceWrapper = styled.p`
  columns: 140px 2;
  column-gap: 20px;
  background: none;
  padding: 40px 0;
  text-align: justify;
  position: relative;
  margin: 50px auto 40px;
  font-weight: 700;
  position: relative;

  ${responsive.tablet`
    columns: initial;
  `}

  &::before {
    content: "";
    position: absolute;
    background: ${Color.COD_GRAY};
    height: 1px;
    width: 50%;
    left: 30%;
    top: 0;
  }

  &::after {
    content: "";
    position: absolute;
    background: ${Color.COD_GRAY};
    height: 1px;
    width: 50%;
    left: 30%;
    bottom: 0;
  }
`;

interface Character {
  name: string;
  header: string;
  description: string;
  cover: string;
  preface: string;
  content: string[];
}

interface WithStoryProps {
  character: Character;
  customWidth?: string;
}

export const withStory = <P extends {}>(
  BaseComponent: React.ComponentType<P>,
): React.FC<P & WithStoryProps> => (props) => {
  const {
    character,
    customWidth,
  } = props;

  return (
    <>
      <ArticleCover
        name={character.name}
        header={character.header}
        description={character.description}
        coverImg={character.cover}
        customWidth={customWidth}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {character.preface}
        </PrefaceWrapper>
        <BaseComponent
          {...props}
        />
      </ContentWrapper>
      <Footer />
    </>
  );
};
