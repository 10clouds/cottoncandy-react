import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from './palette';

export const RadioLabel = styled.label`
	color: ${palette.MAIN_TXT_COLOR};
	display: inline-block;
	font-size: 14px;
	cursor: pointer;
	position: relative;
    padding-left: 46px;
    line-height: 34px;

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
`;
