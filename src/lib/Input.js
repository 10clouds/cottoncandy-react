import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { noop } from './utils';
import {palette, style} from '../palette';

const StyledLabel = styled.label`
  width: 100%;

  > *:nth-last-child(2) {
    padding-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  font-size: 20px;
  padding: 8px 12px;
  max-width: 400px;
  width: 100%;
  height: 24px;
  border-radius: 2px;
  background-color: ${style.BACKGROUND.main};
  border: ${p => p.valid ? `solid 1px ${palette.SECONDARY.base}` : `solid 1px #ff3131`};
`;

const StyledTitle = styled.span`
  display: block;
  font-size: 16px;
  line-height: 1.38;
  color: ${palette.TYPOGRAPHY.heading};
`;

const StyledSubtitle = styled.span`
  display: block;
  font-size: 13px;
  color: #c2c8d0;
  padding-bottom: 4px;
`;

const StyledValidationMessage = styled.span`
  display: block;
  font-size: 13px;
  line-height: 1.4;
  height: 1.4em;
  color: ${palette.RED.base};
`;

class Input extends Component {
  static propTypes = {
    required: PropTypes.bool,
    validator: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    required: false,
    onBlur: noop,
  };

  state = {
    valid: true,
  };

  handleBlur = ({ target }) => {
    const validator = this.props.validator;
    let valid = true;
    if (validator) {
      valid = (Array.isArray(validator) ? validator : [validator]).reduce((acc, v) => acc && v(target.value), true);
    } else {
      valid = target.validity && !!target.validity.valid;
    }

    if (!this.props.required && target.value === '') {
      valid = true;
    }

    this.setState({ valid });
    this.props.onBlur({ target, valid });
  };

  render() {
    const { title, subtitle, errorMessage, ...rest } = this.props;
    return (
      <StyledLabel>
        { title && <StyledTitle>{ title }</StyledTitle> }
        { subtitle && <StyledSubtitle>{ subtitle }</StyledSubtitle> }
        <StyledInput { ...rest } onBlur={ this.handleBlur } valid={ this.state.valid } />
        <StyledValidationMessage>{ !this.state.valid  && errorMessage }</StyledValidationMessage>
      </StyledLabel>
    );
  }
}

export default Input;
