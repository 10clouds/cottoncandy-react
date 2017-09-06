import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledH2 = styled.h2`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${style.FONT.heading};
  font-size: 22px;
  text-align: left;
`;

const H2 = (props) => (
  <StyledH2 { ...props }/>
);

H2.propTypes = {
  children: PropTypes.string,
};

export default H2;
