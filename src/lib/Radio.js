import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { noop } from './utils';
import { palette, style } from '../constants';

const StyledRadio = styled.div`
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
        border-radius: 50%;
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
        background: ${style.BACKGROUND.gradient};
        border-radius: 100%;
        content: '';
        height: 16px;
        left: ${props => props.shadow ? '7px' : '8px'};
        opacity: 0;
        position: absolute;
        top: ${props => props.shadow ? 'calc(50% - 8px)' : 'calc(50% - 8px)'};
        transform: scale(0);
        transition: all 0.2s ease;
        width: 16px;
      }
    }

    &:checked + label {
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

class Radio extends Component {
  state = {
    checked: false,
  };

  setChecked = () => {
    this.setState(state => ({ checked: true }));
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
      <StyledRadio shadow={ this.props.shadow }>
        <input
          name={ this.props.name }
          type="radio"
          checked={ this.state.checked }
          onChange={ this.setChecked }
        />
        <label onClick={ this.setChecked }>
          { this.props.label }
        </label>
      </StyledRadio>
    );
  }
}

Radio.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  shadow: PropTypes.bool,
};

Radio.defaultProps = {
  onChange: noop,
};

export default Radio;
