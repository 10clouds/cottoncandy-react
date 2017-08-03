import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledH1 = styled.h1`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${FONT.heading};
  font-size: 50px;
  font-weight: 300;
  text-align: left;
`;

const Button = (props) => (
  <StyledH1 { ...props }/>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
