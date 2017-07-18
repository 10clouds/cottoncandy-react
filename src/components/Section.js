import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 24px 40px;
`;

const Section = (props) => <StyledSection { ...props } />;

export default Section;
