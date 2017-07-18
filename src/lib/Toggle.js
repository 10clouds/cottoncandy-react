import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

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
    color: ${palette.MAIN_TXT_COLOR};
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border: ${p => p.theme === 'primary' ? `solid 1px ${palette.PRIMARY}` : 'none'};
    border-radius: 18px;
    transition: opacity .2s ease-out;
    box-shadow: ${p => p.theme === 'primary' ? 'none' : '0 0 15px 0 #d6d6d6'};
    background-color: #ffffff;

    &:before,
    &:after {
      color: ${palette.PRIMARY};
      position: absolute;
      transition: opacity 2s ease-out;
      opacity: 0;
    }

    &:before {
      left: 8px;
    }

    &:after {
      right: 8px;
    }
  }

  span {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${palette.PRIMARY};
    margin-left: 6px;
    transition: transform .2s ease-out;
  }
`;

class Toogle extends Component {
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

export default Toogle;
