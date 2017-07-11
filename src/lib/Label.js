import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

export const Label = styled.label`
  color: ${palette.MAIN_TXT_COLOR};
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
`;
