import styled from 'styled-components';

import { palette } from '../constants';

export const NavLink = styled.a`
  color: ${palette.TYPOGRAPHY.main};
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  transition: ${palette.TRANSITION.main};
  transition-property: border-color, color;

  &:hover,
  &.active {
    color: ${palette.LINK_HOVER_COLOR};
    border-color: ${palette.LINK_HOVER_COLOR};
  }
`;
