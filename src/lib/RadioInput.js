import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

export const RadioInput = styled.input`
  &:checked,
  &:not(:checked) {
    position: relative;
    width: 0;
    height: 0;
    visibility: hidden;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -20px;
      width: 30px;
      height: 30px;
      border: ${props => props.shadow ? 'none' : palette.INPUT_BORDER};
      box-shadow: ${props => props.shadow ? palette.SHADOW : 'none'};
      border-radius: 100%;
      background: white;
      visibility: visible;
    }

    &:after {
      content: '';
      width: 16px;
      height: 16px;
      background: ${palette.GRADIENT_BG};
      position: absolute;
      top: ${props => props.shadow ? '-13px' : '-12px'};
      left: ${props => props.shadow ? '7px' : '8px'};
      border-radius: 100%;
      transition: all 0.2s ease;
      visibility: visible;
    }
  }

  &:not(:checked) {

  		&:after {
  			opacity: 0;
    		transform: scale(0);
  		}

  }

  &:checked {

  		&:after {
  			opacity: 1;
    		transform: scale(1);
  		}

  }
`;
