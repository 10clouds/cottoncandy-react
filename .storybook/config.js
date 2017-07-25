import PropTypes from 'prop-types';
import { configure, setAddon } from '@storybook/react';
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

// Temp fix of PropVal.propTypes
// https://github.com/storybooks/storybook/issues/1305
PropVal.propTypes = {
  ...PropVal.propTypes,
  val: PropTypes.any,
  maxPropObjectKeys: PropTypes.number,
  maxPropArrayLength: PropTypes.number,
  maxPropStringLength: PropTypes.number,
};

const req =require.context('../src/stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
