import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

export const ProgressBar = styled.div`
  background: ${palette.PROGRESSBAR_BG};
  margin: 10px auto 30px;
  width: 250px;
  height: 3px;

  &:after {
    content: '';
    background: ${palette.GRADIENT_BG};
    display: block;
    height: 3px;
    width: 100%;
    animation: bar-fill 2s infinite linear;
  }

  @keyframes bar-fill {
    0% { width: 0; }
  }
`;
