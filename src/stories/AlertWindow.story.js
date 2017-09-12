import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Row, StoryItem } from './utils.js';

import AlertWindow from "../lib/AlertWindow";

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Alert Window', '', () => (
    <div>
      <Row title="Alert Window">
        <StoryItem>
          <AlertWindow
            title="Save your work?"
            info="You have unsaved changes. Would you like to save them?"
            width="600px"
            buttons={[
              {name: 'Yes'},
              {name: 'No', theme: 'secondary'},
              {name: 'Cancel', theme: 'secondary'}
              ]}
          />
        </StoryItem>
      </Row>
      <Row title="Playground">
        <StoryItem>
          <AlertWindow
            title={text('Title', 'Save your work?')}
            info={text('Info', 'You have unsaved changes. Would you like to save them?')}
            width={text('Width', '600px')}
            height={text('Height', '240px')}
            withCloseButton={boolean('With close button', true)}
            onClose={action('Close')}
            buttons={
              JSON.parse(
                text(
                  'Buttons',
                  '[{"name": "Yes"}, {"name": "No", "theme": "secondary"}, {"name": "Cancel", "theme": "secondary"}]'
                )
              ).map((btn) => {
                btn.onClick = action('Button clicked: ' + btn.name);
                return btn;
              })
            }
          />
        </StoryItem>
      </Row>
    </div>
  ));
