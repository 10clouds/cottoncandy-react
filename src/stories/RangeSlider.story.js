import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import RangeSlider from '../lib/RangeSlider';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('RangeSlider', '', () => (
    <div>
      <Row title="Basic">
        <StoryItem title="Default">
          <RangeSlider />
        </StoryItem>
        <StoryItem title="With initial value">
          <RangeSlider value={ 50 } />
        </StoryItem>
        <StoryItem title="With custom step">
          <RangeSlider step={ 20 } />
        </StoryItem>
      </Row>

      <Row title="Min / Max">
        <StoryItem title="With min value">
          <RangeSlider min={ 20 } />
        </StoryItem>
        <StoryItem title="With max value">
          <RangeSlider max={ 500 } />
        </StoryItem>
        <StoryItem title="With min & max value">
          <RangeSlider min={ 2000 } max={ 2017 } />
        </StoryItem>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <RangeSlider
            min={ number('Min', 0) }
            max={ number('Max', 100) }
            step={ number('step', 1) }
            value={ number('Value', 0) }
            width={ number('Width', 300)}
          />
        </StoryItem>
      </Row>
    </div>
  ));
