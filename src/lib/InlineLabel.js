import React from 'react';
import styled from 'styled-components';

import { palette } from '../constants';

export const InlineLabel = styled.label`
  color: ${palette.TYPOGRAPHY.main};
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  padding-left: 46px;
  line-height: 34px;
`;
