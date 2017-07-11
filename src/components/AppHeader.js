import React from 'react';
import styled from 'styled-components';

import * as palette from '../palette';

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: ${palette.MENU_BOX_SHADOW};
  border-radius: 5px;
  padding: 24px 40px;
`;

const AppHeader = (props) => <StyledHeader { ...props } />;

export default AppHeader;
