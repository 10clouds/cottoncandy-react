import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledLink = styled.a`
  color: ${palette.TYPOGRAPHY.main};
  font-family: ${FONT.main};
  font-size: 14px;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = (props) => (
  <StyledLink { ...props }/>
);

Button.propTypes = {
  children: PropTypes.string,
}

export default Button;
