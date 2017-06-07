import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const Button = styled.button`
  border: ${palette.BUTTON_BORDER};
  border-radius: 35px;
  background: ${props => props.primary ? palette.BUTTON_BG : 'white'};
  color: ${props => props.primary ? 'white' : palette.BUTTON_TXT_COLOR};
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
`;