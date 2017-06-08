import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const Title = styled.h1`
  color: ${palette.TEXT_COLOR};
  font-weight: 300;
  font-size: 50px;
`;

export const Subtitle = styled.h2`
  color: ${palette.TEXT_COLOR};
  font-weight: 300;
  font-size: 22px;
`;