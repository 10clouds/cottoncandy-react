import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import StepProgress from '../lib/StepProgress';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('StepProgress', '', () => (
    <div>
      <Row title="Basic">
        <StoryItem title="First step">
          <StepProgress
            steps={ ['Intro', 'Registration', 'Acceptation']}
            activeStep="Intro"
          />
        </StoryItem>
        <StoryItem title="Middle step">
          <StepProgress
            steps={ ['Intro', 'Registration', 'Acceptation']}
            activeStep="Registration"
          />
        </StoryItem>
        <StoryItem title="Last step">
          <StepProgress
            steps={ ['Intro', 'Registration', 'Acceptation']}
            activeStep="Acceptation"
          />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <StepProgress
            steps={ text('Steps', 'Intro, Registration, Confirmation, Acceptation').split(/\s*,\s*/) }
            activeStep={ text('Active step', 'Registration') }
          />
        </StoryItem>
      </Row>
    </div>
  ));
