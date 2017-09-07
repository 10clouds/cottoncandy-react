import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from './Link';

import * as palette from '../palette';

const StyledNav = styled.nav`
  font-family: ${palette.FONT.main};

  height: ${p => p.withShadow ? '45px' : 'auto'};
  border-radius: ${p => p.withShadow ? '5px' : 'none'};
  box-shadow: ${p => p.withShadow ? palette.SHADOW : 'none'};
  
  line-height: ${p => p.withShadow ? '45px' : 'normal'};
  vertical-align: middle;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  > span {
    display: inline-block;
    position: relative;
    
    height: ${p => p.withShadow ? '45px' : 'auto'};
    
    padding-left: ${p => p.withShadow ? '24px' : '4px'};
        
    :first-child {
      padding-left: 0px;
    }
    
    a {
      opacity: 0.5;
      
      i, span {
        margin-right: 16px;
        margin-left: 16px;
      }
      
      i + span {
        margin-left: 0px;
      }
    }
    
    :last-child {
      a {
        color: ${palette.LINK_HOVER_COLOR};
        opacity: 1;
      }
    }

    :after {
      content: '';
      opacity: ${p => p.withShadow ? '1' : '0.5'};
      position: absolute;
      transform: scale(0.70) rotate(45deg);
      z-index: 1;
      background: transparent;
      border-top: 2px solid ${p => p.withShadow ? palette.SHADOW_COLOR : palette.MAIN_TXT_COLOR};
      border-right: 2px solid ${p => p.withShadow ? palette.SHADOW_COLOR : palette.MAIN_TXT_COLOR};

      top: ${p => p.withShadow ? '-1px' : '7px'};
      right: ${p => p.withShadow ? '-23px' : '-5px'};
      width: ${p => p.withShadow ? '45px' : '10px'}; 
      height: ${p => p.withShadow ? '45px' : '10px'};
    }
    
    :last-child:after {
      content: none;
    }
  }
`;

const Breadcrumbs = (props) => (
  <StyledNav { ...props }>
    { props.links.map((el, idx) =>
      <span key={idx}>
            <Link href={el.href}>
              {!!el.icon && <i className={el.icon}></i>}
              {!!el.text && <span>{el.text}</span> }
            </Link>
          </span>
    )}
  </StyledNav>
);

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  shadow: PropTypes.bool
};

Breadcrumbs.defaultProps = {
  shadow: false,
  links: []
};

export default Breadcrumbs;
