import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledH2 = styled.h2`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${FONT.heading};
  font-size: 22px;
  text-align: left;
`;

const Button = (props) => (
  <StyledH2 { ...props }/>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
