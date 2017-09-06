import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledH1 = styled.h1`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${style.FONT.heading};
  font-size: 50px;
  font-weight: 300;
  text-align: left;
`;

const H1 = (props) => (
  <StyledH1 { ...props }/>
);

H1.propTypes = {
  children: PropTypes.string,
};

export default H1;
