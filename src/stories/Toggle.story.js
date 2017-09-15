import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Toggle from '../lib/Toggle';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module); // eslint-disable-line no-undef

stories
  .addDecorator(withKnobs)
  .addWithInfo('Toggle', '', () => (
    <div>
      <Row title="Theme">
        <StoryItem title="Primary">
          <Toggle theme="primary" />
        </StoryItem>
        <StoryItem title="Secondary">
          <Toggle theme="secondary"/>
        </StoryItem>
      </Row>

      <Row title="Checked">
        <StoryItem title="Primary">
          <Toggle theme="primary" checked/>
        </StoryItem>
        <StoryItem title="Secondary">
          <Toggle theme="secondary" checked />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Toggle
            theme={ select('Theme', ['primary', 'secondary'], 'primary') }
            checked={ boolean('Checked', false) }
          />
        </StoryItem>
      </Row>
    </div>
  ));
