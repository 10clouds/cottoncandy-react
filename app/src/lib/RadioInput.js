import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const RadioInput = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:not(:checked) {
  	+ label {
  		&:after {
  			opacity: 0;
    		transform: scale(0);
  		}
  	}
  }

  &:checked {
  	+ label {
  		&:after {
  			opacity: 1;
    		transform: scale(1);
  		}
  	}
  }
`;
