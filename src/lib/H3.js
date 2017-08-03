import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledH3 = styled.h3`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${FONT.heading};
  font-size: 16px;
  line-height: 1.38;
  text-align: left;
`;

const Button = (props) => (
  <StyledH3 { ...props }/>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
