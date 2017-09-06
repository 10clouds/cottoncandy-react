import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledLink = styled.a`
  color: ${palette.TYPOGRAPHY.main};
  font-family: ${style.FONT.main};
  font-size: 14px;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = (props) => (
  <StyledLink { ...props }/>
);

Link.propTypes = {
  children: PropTypes.any,
};

export default Link;
