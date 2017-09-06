import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, style } from '../palette';

const StyledH3 = styled.h3`
  color: ${palette.TYPOGRAPHY.heading};
  font-family: ${style.FONT.heading};
  font-size: 16px;
  line-height: 1.38;
  text-align: left;
`;

const H3 = (props) => (
  <StyledH3 { ...props }/>
);

H3.propTypes = {
  children: PropTypes.string,
};

export default H3;
