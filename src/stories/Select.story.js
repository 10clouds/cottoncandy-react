import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Select, {Option} from '../lib/Select';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module); // eslint-disable-line no-undef

stories
  .addDecorator(withKnobs)
  .addWithInfo('Select', '', () => (
    <div>
      <Row title="General">
        <StoryItem title="Basic">
          <Select options={ ['one', 'two',' three'] } />
        </StoryItem>
        <StoryItem title="Placeholder">
          <Select placeholder="choose" options={ ['one', 'two',' three'] } />
        </StoryItem>
        <StoryItem title="Invalid">
          <Select options={ ['one', 'two',' three'] } valid={false} />
        </StoryItem>
      </Row>
      <Row title="Options handling">
        <StoryItem title="Options as children">
          <Select>
            <Option>one</Option>
            <Option>two</Option>
            <Option>three</Option>
          </Select>
        </StoryItem>
        <StoryItem title="Options as property">
          <Select options={ ['one', 'two',' three'] } />
        </StoryItem>
      </Row>
      <Row title="Playground">
        <StoryItem>
          <Select
            options={text('Options', 'one, two, three').split(/\s*,\s*/)}
            placeholder={text('Placeholder', 'choose')}
            defaultValue=''
            valid={boolean('Valid', true)}
            onChange={action('changed')}
          />
        </StoryItem>
      </Row>
    </div>
  ));
