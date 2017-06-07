import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Radio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;

     + label {
    	position: relative;
	    padding-left: 28px;
	    cursor: pointer;
	    line-height: 20px;
	    display: inline-block;
	    color: #666;

	    &:before {
	    	content: '';
		    position: absolute;
		    left: 0;
		    top: 0;
		    width: 18px;
		    height: 18px;
		    border: 1px solid #ddd;
		    border-radius: 100%;
		    background: #fff;
	    }

	    &:after {
	    	content: '';
		    width: 12px;
		    height: 12px;
		    background: #F87DA9;
		    position: absolute;
		    top: 4px;
		    left: 4px;
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