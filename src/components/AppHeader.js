import React from 'react';
import styled from 'styled-components';

import { palette } from '../constants';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 26px 66px;
`;

const StyledLogo = styled.div`
  align-self: flex-end;
  background: url(logo_10clouds.svg) center no-repeat;
  display: block;
  height: 48px;
  width: 140px;
`;

const Title = styled.h1`
  align-self: flex-start;
  color: ${palette.TYPOGRAPHY.heading};
  font-weight: 300;
  font-size: 50px;
`;

const AppHeader = (props) => (
  <StyledHeader { ...props }>
    <StyledLogo/>
    <Title>React UI Kit</Title>
  </StyledHeader>
);

export default AppHeader;
