import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette } from '../palette';

export const StyledSpinner = styled.div`
  width: ${props => props.small ? '35px' : '75px'};
  height: ${props => props.small ? '35px' : '75px'};
  border: 2px solid ${palette.PRIMARY.base};
  border-top: 3px solid ${palette.GRAY.white};
  border-radius: 100%;
  margin: 30px auto;
  animation: spinner 1s infinite linear;
  opacity: ${props => props.light ? '0.4' : '1'};

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = (props) => (
  <StyledSpinner { ...props }/>
);

Spinner.propTypes = {
  children: PropTypes.string,
};

export default Spinner;
