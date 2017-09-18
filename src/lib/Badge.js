import React from 'react';
import styled from 'styled-components';
import { style } from '../constants';

const Badge = styled.span`
  display: inline-block;
  line-height: 24px;
  min-width: 12px;
  border-radius: 12px;
  background-image: ${style.BACKGROUND.redGradient};
  padding: 0 6px;
`;

export default Badge;
