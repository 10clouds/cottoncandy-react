import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const Radio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;

     + label {
    	position: relative;
	    padding-left: 46px;
	    cursor: pointer;
	    font-size: 14px;
	    line-height: 34px;
	    display: inline-block;
	    color: ${palette.MAIN_TXT_COLOR};

	    &:before {
	    	content: '';
		    position: absolute;
		    left: 0;
		    top: 0;
		    width: 30px;
		    height: 30px;
		    border: ${palette.INPUT_BORDER};
		    border-radius: 100%;
		    background: white;
	    }

	    &:after {
	    	content: '';
		    width: 16px;
		    height: 16px;
		    background: ${palette.GRADIENT_BG};
		    position: absolute;
		    top: 8px;
		    left: 8px;
		    border-radius: 100%;
		    transition: all 0.2s ease;
	    }
    } 
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