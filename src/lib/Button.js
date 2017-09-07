import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

const StyledButton = styled.button`
  border: ${p => p.theme === 'ternary' ? 'none' : palette.BUTTON_BORDER};
  box-shadow: ${p => p.theme === 'ternary' ? '0 0 12px 0px rgba(124, 124, 124, 0.5);' : 'none'};
  border-radius: ${p => p.rounded ? '38px' : '5px' };
  background: ${p => p.theme === 'primary' ? palette.GRADIENT_BG : 'white'};
  color: ${p => p.theme === 'primary' ? 'white' : palette.BUTTON_TXT_COLOR};
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
