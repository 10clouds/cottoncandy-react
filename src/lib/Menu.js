import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette, style } from '../constants';
import { NavLink } from './NavLink';

const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: right;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 16px 20px ${(p) => (!p.hasSubMenu && p.hoverLine === 'bottom') ? '0px' : '24px'};
  margin-top: 8px;

  & > ul {
    display: none;
    position: absolute;
    box-shadow: ${style.SHADOW.big};
    background: #fff;
    margin-left: -20px;
    margin-top: 16px;
    padding: 10px 0;
    white-space: nowrap;
  }
`;

const SubbedNavItem = NavItem.extend`
  padding-right: 24px;
  white-space: nowrap;
  
  ::before {
    content: ' ';
    height: 6px;
    width: 6px;
    border-top: 2px solid ${palette.TYPOGRAPHY.main};
    border-right: 2px solid ${palette.TYPOGRAPHY.main};
    position: relative;
    top: 5px;
    left: 12px;
    float: right;
    transform: scale(0.7) rotate(45deg);
    transition: ${style.TRANSITION.main};
    transition-property: transform, opacity;
  }

  > a {
    transition-property: border-color, color, opacity;
  }

  :hover {
    box-shadow: ${style.SHADOW.big};
    position: relative;

    ::before {
      opacity: 0.5;
      transform: scale(0.7) rotate(135deg);
    }

    > a {
      opacity: 0.5;
    }

    ::after {
      content: ' ';
      display: block;
      background: ${style.BACKGROUND.main};
      position: absolute;
      width: 100%;
      left: 0;
      height: 20px;
    }

    & > ul {
      display: block;
    }
  }
`;

const SubNavItem = styled.li`
  display: block;
  padding: 8px 20px;
  box-shadow: none;
  white-space: nowrap;
`;

const Nav = styled.header`
  height: 69px;
  background-color: ${style.BACKGROUND.main};
  box-shadow: ${style.SHADOW.big};
  border-radius: 5px;
  padding: 0 40px;
`;

const MenuNavLink = NavLink.extend`
  background: ${style.BACKGROUND.main};
  display: ${(p) => (!p.hasSubMenu && !p.isSubMenu && p.hoverLine === 'bottom') ? 'block' : 'inline-block' };
  height: ${(p) => (!p.hasSubMenu && !p.isSubMenu && p.hoverLine === 'bottom') ? '40px' : 'auto'};
  border-bottom-style: ${(p) => (p.hasSubMenu && p.hoverLine === 'bottom') || p.hoverLine === 'none' ? 'none' : 'solid' };
`;

const Submenu = (props) => (
  <NavMenu>
    { props.links.map((item, index) =>
      <SubNavItem key={item.name + index}>
        <MenuNavLink
          href={item.link}
          hoverLine={props.hoverLine}
          isSubMenu
        >
          {item.name}
        </MenuNavLink>
      </SubNavItem>
    )}
  </NavMenu>
);

const Menu = (props) => (
  <Nav>
    <NavMenu>
      {props.links.map((item, index) =>
        item.submenu ? (
            <SubbedNavItem
              key={item.name + index}
              hoverLine={props.hoverLine}
              hasSubMenu
            >
              <MenuNavLink
                href={item.link}
                hoverLine={props.hoverLine}
                hasSubMenu
              >
                {item.name}
              </MenuNavLink>
              <Submenu links={item.submenu} hoverLine={props.hoverLine}/>
            </SubbedNavItem>
          ) : (
            <NavItem key={item.name + index} hoverLine={props.hoverLine}>
              <MenuNavLink href={item.link} hoverLine={props.hoverLine}>
                {item.name}
              </MenuNavLink>
            </NavItem>
          )
      )}
    </NavMenu>
  </Nav>
);

Menu.propTypes = {
  hoverLine: PropTypes.oneOf(['none', 'underline', 'bottom']),
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    submenu: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

Menu.defaultProps = {
  hoverLine: 'underline',
};

export default Menu;
