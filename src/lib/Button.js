import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledButton = styled.button`
  border: ${p => p.theme === 'ternary' ? 'none' : style.BORDER.button};
  box-shadow: ${p => p.theme === 'ternary' ? style.SHADOW.button : 'none'};
  border-radius: ${p => p.rounded ? '38px' : '5px' };
  background: ${p => p.theme === 'primary' ? style.BACKGROUND.gradient : 'white'};
  color: ${p => p.theme === 'primary' ? 'white' : palette.TYPOGRAPHY.button};
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
