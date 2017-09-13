import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Row, StoryItem } from './utils.js';

import SearchInput from '../lib/SearchInput';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Search Input', '', () => (
    <div>
      <Row title="General">
        <StoryItem title="Basic">
          <SearchInput placeholder="Search..." />
        </StoryItem>
        <StoryItem title="Expandable">
          <SearchInput expandable={true} placeholder="Search..." />
        </StoryItem>
      </Row>
      <Row title="Playground">
        <StoryItem>
          <SearchInput
            expandable={boolean('Expandable', false)}
            placeholder={text('Placeholder', 'Search...')}
          />
        </StoryItem>
      </Row>
    </div>
  ));
