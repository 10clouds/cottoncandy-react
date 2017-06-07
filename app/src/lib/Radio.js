import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const radioStyles = {
  // &:checked,
  // &:not(:checked) {
  //   position: absolute;
  //   left: -9999px;
  // }
};

const Title = styled.h1`
	color: pink;
`;

export const Radio = ({ children, onClick }) => (
  <div>
  	  <Title>Radio boxes</Title>
	  <p>
	  	<label htmlFor="ice-cream">Ice cream</label>
	  	<input id="ice-cream" type="radio" name="radio-group" style={radioStyles} defaultChecked />
	  </p>
	  <p>
	  	<label htmlFor="cotton-candy">Cotton candy</label>
	  	<input id="cotton-candy" type="radio" name="radio-group" style={radioStyles} />
	  </p>
  </div>
);

export default Radio;