import styled from 'styled-components';

import { getFontSize } from 'helpers';
import { FontWeight, Color } from 'styles';

export const ReadMoreButton = styled.span`
  border: 1px solid ${Color.COD_GRAY};
  padding: 2px 15px;
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.LIGHT};
  cursor: pointer;
`;
