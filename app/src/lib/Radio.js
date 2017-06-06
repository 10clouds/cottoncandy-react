import PropTypes from 'prop-types';
import React from 'react';

const radioStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  margin: 10,
};

export const Radio = ({ children, onClick }) => (
  <radio style={radioStyles} />
);

export default Radio;