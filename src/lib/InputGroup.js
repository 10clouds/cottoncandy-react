import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 10px 18px;
  }
`

class StyledInputGroup extends Component {
  render() {
    return (
      <StyledInputGroup />
    );
  }
}

InputGroup.propTypes = {
}

export default InputGroup;
