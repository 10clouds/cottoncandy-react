import React from 'react';

import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Button from '../components/Button';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div>{ story() }</div>
  ))
  .addWithInfo('Button', '', () => (
    <div>
      <Row title="Theme">
        <StoryItem title="Primary">
          <Button theme="primary">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Secondary">
          <Button theme="secondary">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Ternary">
          <Button theme="ternary">
            Hello Button
          </Button>
        </StoryItem>
      </Row>
      <Row title="Size">
        <StoryItem title="Small">
          <Button size="small">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Medium">
          <Button size="medium">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Big">
          <Button size="big">
            Hello Button
          </Button>
        </StoryItem>
      </Row>
      <Row title="Other">
        <StoryItem title="Rounded">
          <Button rounded={ true }>
            Hello Button
          </Button>
        </StoryItem>
      </Row>
      <Row title="Playground">
        <StoryItem>
          <Button
            theme={ select('Theme', ['primary', 'secondary', 'ternary'], 'primary') }
            size={ select('Size', ['small', 'medium', 'big'], 'medium') }
            rounded={ boolean('Rounded', false) }
            onClick={ action('clicked') }
          >
            Hello Button
          </Button>
        </StoryItem>
      </Row>
    </div>
  ));