import React from 'react';

import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Checkbox from '../lib/Checkbox';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Checkbox', '', () => (
    <div>
      <Row title="Theme">
        <StoryItem title="Default">
          <Checkbox
            id="checkbox-a"
            label="some label"
          />
        </StoryItem>
        <StoryItem title="With shadow">
          <Checkbox
            id="checkbox-c"
            label="some label"
            shadow
          />
        </StoryItem>
      </Row>

      <Row title="Checked">
        <StoryItem title="Default">
          <Checkbox
            checked
            id="checkbox-b"
            label="some label"
          />
        </StoryItem>
        <StoryItem title="With shadow">
          <Checkbox
            checked
            id="checkbox-d"
            label="some label"
            shadow
          />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Checkbox
            checked={ boolean('Checked', false) }
            label={ text('Label', 'some label') }
            shadow={ boolean('Shadow', false) }
          />
        </StoryItem>
      </Row>
    </div>
  ));
