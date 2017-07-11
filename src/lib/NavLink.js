import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

export const NavLink = styled.a`
  color: ${palette.MAIN_TXT_COLOR};
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  transition: ${palette.TRANSITION};
  transition-property: border-color, color;

  &:hover,
  &.active {
    color: ${palette.LINK_HOVER_COLOR};
    border-color: ${palette.LINK_HOVER_COLOR};
  }
`;