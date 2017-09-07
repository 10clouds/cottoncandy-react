import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledP = styled.p`
  color: ${palette.TYPOGRAPHY.main};
  font-family: ${FONT.main};
  font-size: 14px;
  margin: 1rem 2rem;
  text-align: left;
`;

const P = (props) => (
  <StyledP { ...props }/>
);

P.propTypes = {
  children: PropTypes.string,
};

export default P;
