import React, { Component } from 'react';
import styled from 'styled-components';

import * as palette from '../palette';
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
  background-color: white;
  box-shadow: ${palette.MENU_BOX_SHADOW};
  border-radius: 5px;
  padding: 24px 40px;
`;

export class Menu extends Component {
  render() {
    return (
      <Nav>
        <NavMenu>
          { this.props.links.map((item, index) =>
            <NavItem key={ item.name + index }>
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
