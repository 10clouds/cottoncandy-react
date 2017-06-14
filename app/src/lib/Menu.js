import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import * as palette from './palette';
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

export class Menu extends Component {
  render() {
    return (
      <nav>
        <NavMenu>
          {this.props.links.map((item, index) => {
            return <NavItem key={index}><NavLink href={item.link}>{item.name}</NavLink></NavItem>;
          })}
        </NavMenu>
      </nav>
    );
  }
}

export default Menu;