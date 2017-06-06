import PropTypes from 'prop-types';
import React from 'react';

const inputStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  margin: 10,
};

export const Input = ({ children, onClick }) => (
  <input style={inputStyles} />
);

export default Input;