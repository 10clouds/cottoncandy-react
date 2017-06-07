import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #5a79e6;
  border-radius: 35px;
  background: ${props => props.primary ? 'linear-gradient(to bottom, #6f8aee, #4862e1)' : 'white'};
  color: ${props => props.primary ? 'white' : '#597ce4'};
  cursor: pointer;
  font-size: 16;
  padding: 10px 20px;
`;