import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Spinner from '../lib/Spinner';
import ProgressBar from '../lib/ProgressBar';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Spinner & ProgressBar', '', () => (
    <div>
      <Row title="Progress Circle">
        <StoryItem title="Progress at 20%">
          <ProgressBar type="circle" value={ 0.2 } />
        </StoryItem>
        <StoryItem title="Progress at 50%">
          <ProgressBar type="circle" value={ 0.5 } />
        </StoryItem>
        <StoryItem title="Progress at 80%">
          <ProgressBar type="circle" value={ 0.8 } />
        </StoryItem>
      </Row>

      <Row title="Progress Bar">
        <StoryItem title="Progress at 20%">
          <ProgressBar type="bar" value={ 0.2 } />
        </StoryItem>
        <StoryItem title="Progress at 50%">
          <ProgressBar type="bar" value={ 0.5 } />
        </StoryItem>
        <StoryItem title="Progress at 80%">
          <ProgressBar type="bar" value={ 0.8 } />
        </StoryItem>
      </Row>

      <Row title="Spinner">
        <StoryItem title="Default">
          <Spinner />
        </StoryItem>
        <StoryItem title="With initial value">
          <Spinner value={ 50 } />
        </StoryItem>
        <StoryItem title="With custom step">
          <Spinner step={ 20 } />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <ProgressBar
            showLabel={ boolean('Show label', true)}
            type={ select('Type', ['bar', 'circle'], 'circle')}
            value={ (number('Value (%)', 20) || 0) / 100 }
          />
        </StoryItem>
      </Row>
    </div>
  ));
