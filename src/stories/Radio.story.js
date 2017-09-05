import React from 'react';

import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Radio from '../lib/Radio';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Radio', '', () => (
    <div>
      <Row title="Theme">
        <StoryItem title="Default">
          <Radio
            id="radio-a"
            label="some label"
            name="radio-group-a"
          />
        </StoryItem>
        <StoryItem title="With shadow">
          <Radio
            id="radio-c"
            label="some label"
            name="radio-group-b"
            shadow
          />
        </StoryItem>
      </Row>

      <Row title="Checked">
        <StoryItem title="Default">
          <Radio
            checked
            id="radio-b"
            label="some label"
            name="radio-group-c"
          />
        </StoryItem>
        <StoryItem title="With shadow">
          <Radio
            checked
            id="radio-d"
            label="some label"
            name="radio-group-d"
            shadow
          />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Radio
            checked={ boolean('Checked', false) }
            label={ text('Label', 'some label') }
            shadow={ boolean('Shadow', false) }
          />
        </StoryItem>
      </Row>
    </div>
  ));