import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Input from '../lib/Input';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Input', '', () => (
    <div>
      <Row title="General">
        <StoryItem title="With title" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input title="Your name" />
        </StoryItem>
        <StoryItem title="With subtitle" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input title="Your name" subtitle="Some additional hints" />
        </StoryItem>
        <StoryItem title="With placeholder" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input title="Your name" placeholder="John Smith" />
        </StoryItem>
      </Row>

      <Row title="Validators and types">
        <StoryItem title="Number" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input
            title="Your age"
            type="number"
            min="0"
          />
        </StoryItem>
        <StoryItem title="URL" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input
            title="Your website"
            type="url"
          />
        </StoryItem>
      </Row>

      <Row title="Custom validators">
        <StoryItem title="Single" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input
            title="Postcode"
            subtitle="5 digits (e.g. 00 000)"
            validator={ value => /^\s*\d\s*\d\s*\d\s*\d\s*\d\s*$/.test(value) }
          />
        </StoryItem>
        <StoryItem title="Multiple" style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input
            title="Uppercase ending with digits"
            subtitle="e.g. ABC123"
            validator={[
              value => /^[^a-z]*$/.test(value),
              value => /\d+$/.test(value),
            ]}
          />
        </StoryItem>
      </Row>

      <Row title="Error messages">
        <StoryItem style={ { display: 'flex', 'justifyContent': 'space-between', 'flexDirection': 'column' } }>
          <Input
            title="Postcode"
            subtitle="5 digits (e.g. 00 000)"
            validator={ value => /^\s*\d\s*\d\s*\d\s*\d\s*\d\s*$/.test(value) }
            errorMessage="The provided postalcode is not valid"
          />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Input
            required={ boolean('Required') }
            title={ text('Title') }
            subtitle={ text('Subtitle') }
            type={ text('Type', 'test') }
            errorMessage={ text('Error message') }
          />
        </StoryItem>
      </Row>
    </div>
  ));
