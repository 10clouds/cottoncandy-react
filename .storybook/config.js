import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const req =require.context('../src/stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
