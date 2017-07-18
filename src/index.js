import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  // https://github.com/garbles/why-did-you-update/issues/45
  // eslint-disable-next-line no-unused-vars,react/no-deprecated
  let createClass = React.createClass;
  Object.defineProperty(React, 'createClass', {
    set: (nextCreateClass) => {
      createClass = nextCreateClass;
    }
  });

  // eslint-disable-next-line global-require
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
