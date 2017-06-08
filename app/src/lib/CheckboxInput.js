import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const CheckboxInput = styled.input`
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
      border-radius: 2px;
      background: white;
      visibility: visible;
    }

    &:after {
      content: '✓';
      font-size: 20px;
      text-align: center;
      line-height: 31px;
      width: 32px;
      height: 32px;
      color: ${props => props.shadow ? palette.PURPLE : 'white'};
      background: ${props => props.shadow ? 'white' : palette.GRADIENT_BG};
      position: absolute;
      top: -20px;
      left: 0;
      border-radius: 2px;
      transition: all 0.2s ease;
      visibility: visible;
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
