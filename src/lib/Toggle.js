import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { palette, style } from '../constants';

const StyledToogle = styled.div`
  width: 50px;
  height: 30px;

  input {
    left: -99999px;
    position: absolute;

    &:checked {
      + label span {
        transform: translateX(18px);
      }

      + label {
        opacity: 1;

        &:before {
          content: '✓';
          opacity: 1;
        }
      }
    }

    &:not(:checked) {
      + label span {
        transform: translateX(0);
      }

      + label {
        opacity: .4;

        &:after {
          content: '×';
          opacity: 1;
        }
      }
    }
  }

  label {
    color: ${palette.TYPOGRAPHY.main};
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border: ${p => p.theme === 'primary' ? `solid 1px ${palette.PRIMARY.base}` : 'none'};
    border-radius: 18px;
    transition: opacity .2s ease-out;
    box-shadow: ${p => p.theme === 'primary' ? 'none' : style.SHADOW.toggle};
    background-color: ${palette.GRAY.white};

    &:before,
    &:after {
      color: ${palette.PRIMARY.base};
      position: absolute;
      transition: opacity 2s ease-out;
      opacity: 0;
    }

    &:before {
      left: 8px;
      top: 6px;
      
      @supports (-ms-ime-align:auto) {
        top: 4px;
      }
    }

    &:after {
      right: 8px;
      top: 6px;
    }
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${palette.PRIMARY.base};
    margin-left: 6px;
    transition: transform .2s ease-out;
  }
`;

class Toggle extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(['primary', 'secondary']),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    theme: 'primary',
    onChange: () => {},
  };

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
      <StyledToogle
        { ...this.props }
      >
        <input
          name={ this.props.name }
          type="checkbox"
          checked={ this.state.checked }
          onChange={ this.toggleChecked }
        />
        <label onClick={ this.toggleChecked }>
          <span />
        </label>
      </StyledToogle>
    );
  }
}

export default Toggle;
