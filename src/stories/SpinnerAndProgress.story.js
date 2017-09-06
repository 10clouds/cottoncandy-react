import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

import Spinner from '../lib/Spinner';
import Progress from '../lib/Progress';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Spinner & Progress', '', () => (
    <div>
      <Row title="Progress Circle">
        <StoryItem title="Progress at 20%">
          <Progress type="circle" value={ 0.2 } />
        </StoryItem>
        <StoryItem title="Progress at 50%">
          <Progress type="circle" value={ 0.5 } />
        </StoryItem>
        <StoryItem title="Progress at 80%">
          <Progress type="circle" value={ 0.8 } />
        </StoryItem>
      </Row>

      <Row title="Progress Bar">
        <StoryItem title="Progress at 20%">
          <Progress type="bar" value={ 0.2 } />
        </StoryItem>
        <StoryItem title="Progress at 50%">
          <Progress type="bar" value={ 0.5 } />
        </StoryItem>
        <StoryItem title="Progress at 80%">
          <Progress type="bar" value={ 0.8 } />
        </StoryItem>
      </Row>

      <Row title="Spinner">
        <StoryItem title="Default">
          <Spinner />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <Progress
            showLabel={ boolean('Show label', true)}
            type={ select('Type', ['bar', 'circle'], 'circle')}
            value={ (number('Value (%)', 20) || 0) / 100 }
          />
        </StoryItem>
      </Row>
    </div>
  ));
