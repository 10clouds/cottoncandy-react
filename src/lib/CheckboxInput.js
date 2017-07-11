import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

export const CheckboxInput = styled.input`
  &:checked,
  &:not(:checked) {
    position: relative;
    width: 0;
    height: 0;
    visibility: hidden;

    &:before {
      background: white;
      border: ${props => props.shadow ? 'none' : palette.INPUT_BORDER};
      border-radius: 2px;
      box-shadow: ${props => props.shadow ? palette.SHADOW : 'none'};
      content: '';
      height: 30px;
      left: 0;
      position: absolute;
      top: -20px;
      visibility: visible;
      width: 30px;
    }

    &:after {
      background: ${props => props.shadow ? 'white' : palette.GRADIENT_BG};
      border-radius: 2px;
      color: ${props => props.shadow ? palette.CHECK_COLOR : 'white'};
      content: '✓';
      font-size: 20px;
      height: 32px;
      left: 0;
      line-height: 31px;
      position: absolute;
      text-align: center;
      top: -20px;
      transition: all 0.2s ease;
      visibility: visible;
      width: 32px;
    }
  }

  &:not(:checked) {

  		&:after {
  			opacity: 0;
  		}

  }

  &:checked {

  		&:after {
  			opacity: 1;
  		}

  }
`;
