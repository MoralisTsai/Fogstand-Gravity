import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { getFontSize } from 'helpers';
import { Color, FontWeight } from 'styles';
import { CoverLogo } from 'components/_Shared/CoverLogo';

/** Style */

const CoverWrapper = styled.div`
  background-image: url("https://res.cloudinary.com/defykcau3/image/upload/v1573259914/workshop-2_gzt6yq.jpg");
  background-size: cover;
  height: 400px;
  position: relative;
  margin-bottom: 50px;
`;

const CoverTitle = styled.h2`
  ${getFontSize('S3')};
  padding: 5px 30px;
  background-color: ${rgba(Color.COD_GRAY, 0.3)};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  color: ${Color.WHITE};
  font-weight: ${FontWeight.BOLD};
  display: inline-block;
`;

/** End */

export const Cover = () => {
  return (
    <CoverWrapper>
      <CoverTitle>
        工作坊簡介
      </CoverTitle>
      <CoverLogo />
    </CoverWrapper>
  );
};
