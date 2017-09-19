import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dropdown from '../lib/Dropdown';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Dropdown', '', () => (
    <div>
      <Row title="General">
        <StoryItem title="Basic">
          <Dropdown options={ ['one', 'two',' three'] } />
        </StoryItem>
        <StoryItem title="Invalid">
          <Dropdown options={ ['one', 'two',' three'] } valid={ false }/>
        </StoryItem>
        <StoryItem title="With placeholder">
          <Dropdown options={ ['one', 'two',' three'] } placeholder="number"/>
        </StoryItem>
      </Row>

      <Row title="Shadow levels" style={ { marginBottom: '10rem'} }>
        <StoryItem>
          <Dropdown options={ ['one', 'two',' three'] } active={ true } autoHide={false} shadowLevel={ 1 } />
        </StoryItem>
        <StoryItem>
          <Dropdown options={ ['one', 'two',' three'] } active={ true } autoHide={false} shadowLevel={ 2 } />
        </StoryItem>
        <StoryItem>
          <Dropdown options={ ['one', 'two',' three'] } active={ true } autoHide={false} shadowLevel={ 3 } />
        </StoryItem>
        <StoryItem>
          <Dropdown options={ ['one', 'two',' three'] } active={ true } autoHide={false} shadowLevel={ 4 } />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Dropdown
            autoHide={ boolean('AutoHide', false) }
            active={ boolean('Active', false) }
            options={ text('Options', 'one, two, three').split(/\s*,\s*/) }
            placeholder={ text('Placeholder', 'number') }
            valid={ boolean('Valid', true) }
            onChange={ action('onChange') }
          />
        </StoryItem>
      </Row>
    </div>
  ));
