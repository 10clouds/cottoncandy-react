import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const InlineLabel = styled.label`
  color: ${palette.MAIN_TXT_COLOR};
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  padding-left: 46px;
  line-height: 34px;
`;
