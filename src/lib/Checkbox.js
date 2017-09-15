import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { noop } from './utils';
import { palette, style } from '../constants';

const StyledCheckbox = styled.div`
  display: inline-block;

  input {
    left: -99999px;
    position: absolute;

    + label {
      color: ${palette.TYPOGRAPHY.main};
      cursor: pointer;
      font-size: 14px;
      line-height: ${props => props.shadow ? '30px' : '32px'};
      padding-left: 46px;
      position: relative;

      &::before {
        background: ${palette.GRAY.white};
        border: ${props => props.shadow ? 'none' : style.BORDER.alt};
        border-radius: 2px;
        box-shadow: ${props => props.shadow ? style.SHADOW.main : 'none'};
        content: '';
        height: 30px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
      }

      &::after {
        background: ${props => props.shadow ? palette.GRAY.white : style.BACKGROUND.gradient};
        border-radius: 2px;
        color: ${props => props.shadow ? palette.TYPOGRAPHY.check : palette.GRAY.white};
        font-family: 'system-ui';
        font-size: 20px;
        height: 32px;
        left: 0;
        line-height: 31px;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.2s ease;
        width: 32px;
      }
    }

    &:checked + label {
      &::after {
        content: '✓';
        opacity: 1;
      }
    }
  }
`;

class Checkbox extends Component {
  state = {
    checked: false,
  };

  toggleChecked = () => {
    this.setState(state => ({ checked: !state.checked }));
    this.props.onChange();
  };

  componentDidMount() {
    this.setState(state => ({ checked: !!this.props.checked }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.checked !== prevProps.checked) {
      this.setState(state => ({ checked: !!this.props.checked }));
    }
  }

  render() {
    return (
      <StyledCheckbox shadow={ this.props.shadow }>
        <input
          name={ this.props.name }
          type="checkbox"
          checked={ this.state.checked }
          onChange={ this.toggleChecked }
        />
        <label onClick={ this.toggleChecked }>
          { this.props.label }
        </label>
      </StyledCheckbox>
    );
  }
}

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  shadow: PropTypes.bool,
};

Checkbox.defaultProps = {
  onChange: noop,
};

export default Checkbox;
