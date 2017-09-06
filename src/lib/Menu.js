import React, { Component } from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';
import { NavLink } from './NavLink';

const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: right;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 20px;
`;

const Nav = styled.header`
  background-color: ${style.BACKGROUND.main};
  box-shadow: ${style.SHADOW.menu};
  border-radius: 5px;
  padding: 24px 40px;
`;

export class Menu extends Component {
  render() {
    return (
      <Nav>
        <NavMenu>
          { this.props.links.map((item, index) =>
            <NavItem key={ index }>
              <NavLink href={ item.link }>
                { item.name }
              </NavLink>
            </NavItem>
          )}
        </NavMenu>
      </Nav>
    );
  }
}

export default Menu;
