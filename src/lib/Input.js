import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const Input = styled.input`
  border: ${palette.INPUT_BORDER};
  border-radius: 2px;
  background: white;
  font-size: 16px;
  padding: 5px;
`;