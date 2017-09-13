import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../constants';

const StyledButton = styled.button`
  border: ${p => p.theme === 'ternary' ? 'none' : style.BORDER.main};
  box-shadow: ${p => p.theme === 'ternary' ? style.SHADOW.light : 'none'};
  border-radius: ${p => p.rounded ? '38px' : '5px' };
  background: ${p => p.theme === 'primary' ? style.BACKGROUND.gradient : palette.GRAY.white};
  color: ${p => p.theme === 'primary' ? palette.GRAY.white : palette.PRIMARY.base};
  cursor: pointer;
  font-size: 16px;
  padding: ${p =>
    p.size === 'small' ? '10px 30px' :
    p.size === 'medium' ? '20px 50px'
    : '30px 100px'
  };
  min-height: ${p =>
    p.size === 'small' ? '30px' :
    p.size === 'medium' ? '50px'
    : '70px'
  };
  
  :focus {
    outline: 0;
    box-shadow: ${style.SHADOW.outline};
  }
`;

const Button = (props) => (
  <StyledButton { ...props }/>
);

Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'ternary']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
  rounded: false,
};

export default Button;
