import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledP = styled.p`
  color: ${palette.TYPOGRAPHY.main};
  font-family: ${FONT.main};
  font-size: 14px;
  margin: 1rem 2rem;
  text-align: left;
`;

const Button = (props) => (
  <StyledP { ...props }/>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
