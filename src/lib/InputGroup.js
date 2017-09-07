import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 10px 18px;
  }
`;

class InputGroup extends Component {
  render() {
    return (
      <StyledInputGroup />
    );
  }
}

InputGroup.propTypes = {};

export default InputGroup;
