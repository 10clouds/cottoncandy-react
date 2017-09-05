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
  padding: 16px 20px 24px;
  margin-top: 8px;
  
  & > ul {
    display: none;
    position: absolute;
    box-shadow: ${palette.MENU_BOX_SHADOW};
    background: #fff;
    margin-left: -20px;
    margin-top: 16px;
    padding: 10px 0;
    white-space: nowrap;
  }
  
  &.with_submenu{
    :before {
      content: ' ';
      height: 6px;
      width: 6px;
      border-top: 2px solid ${palette.MAIN_TXT_COLOR};
      border-right: 2px solid ${palette.MAIN_TXT_COLOR};
      position: relative;
      top: 5px;
      left: 5px;
      float: right;
      transform: scale(0.70) rotate(45deg);
      transition: ${palette.TRANSITION};
      transition-property: transform, opacity;
    }
    
    > a {
      transition-property: border-color, color, opacity;
    }

    :hover {
      box-shadow: ${palette.MENU_BOX_SHADOW};
      position: relative;
      
      :before {
        opacity: 0.5;
        transform: scale(0.70) rotate(135deg);
      }
      
      > a {
        opacity: 0.5;
      }
      
      :after {
        content: ' ';
        display: block;
        background: #ffffff;
        position: absolute;
        width: 100%;
        left: 0;
        height: 20px;
      }
    
      & > ul {
        display: block;
      }
    }
  }
`;

const SubNavItem = styled.li`
  display: block;
  padding: 8px 20px;
  box-shadow: none;
  whitespace: nowrap;
`;

const Nav = styled.header`
  background-color: white;
  box-shadow: ${palette.MENU_BOX_SHADOW};
  border-radius: 5px;
  padding: 0px 40px;
`;

class Submenu extends Component {
  render() {
    return (
      <NavMenu>
        { this.props.links.map((item, index) =>
          <SubNavItem key={index}>
            <NavLink href={item.link}>
              {item.name}
            </NavLink>
          </SubNavItem>
        )}
      </NavMenu>
    )
  }
}

export class Menu extends Component {
  render() {
    return (
      <Nav>
        <NavMenu>
          { this.props.links.map((item, index) =>
            <NavItem key={item.name + index} className={item.submenu ? 'with_submenu' : ''}>
              <NavLink href={ item.link }>
                { item.name }
              </NavLink>
              {item.submenu && <Submenu links={item.submenu} />}
            </NavItem>
          )}
        </NavMenu>
      </Nav>
    );
  }
}

export default Menu;
