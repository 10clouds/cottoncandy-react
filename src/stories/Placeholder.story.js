import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Placeholder from '../lib/Placeholder';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Placeholder', '', () => (
    <div>
      <Row title="Lists">
        <StoryItem title="Basic">
          <Placeholder>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Custom width">
          <Placeholder style={ { width: '400px' } } >
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Multiline text">
          <Placeholder>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit.</li>
              <li></li>
              <li></li>
            </ul>
          </Placeholder>
        </StoryItem>
      </Row>

      <Row title="Paragraphs">
        <StoryItem title="Basic">
          <Placeholder>
            <p></p>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Custom text">
          <Placeholder>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit. Etiam vel ex scelerisque lorem dapibus pellentesque ut sed mi. Nulla rutrum metus vitae pretium aliquet. Proin rutrum pretium metus, sit amet cursus ex feugiat in. Quisque porta, lectus eget lobortis fringilla, urna nisi dignissim lacus, ut hendrerit dolor neque sed metus.</p>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Multiple paragraphs">
          <Placeholder>
            <p></p>
            <p></p>
            <p></p>
          </Placeholder>
        </StoryItem>
      </Row>

      <Row title="Images">
        <StoryItem title="Aligned to the left">
          <Placeholder>
            <img src="" alt="" />
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit elit elit. Fusce justo nisi, lacinia id eros eu.</p></div>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Centered">
          <Placeholder>
            <div><img src="" alt="" /></div>
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit elit elit.</p></div>
          </Placeholder>
        </StoryItem>
      </Row>

      <Row title="Themes">
        <StoryItem title="Primary">
          <Placeholder theme="primary">
            <img src="" alt="" />
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit elit elit.</p></div>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Secondary">
          <Placeholder theme="secondary">
            <img src="" alt="" />
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit elit elit.</p></div>
          </Placeholder>
        </StoryItem>
        <StoryItem title="Transparent">
          <Placeholder theme="transparent">
            <img src="" alt="" />
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nisi, lacinia id eros eu, fringilla laoreet elit elit elit.</p></div>
          </Placeholder>
        </StoryItem>
      </Row>

      <Row title="Playground" style={ { backgroundColor: text('Style.backgroundColor', 'rgba(238, 238, 238, .3)') } }>
        <StoryItem>
          <Placeholder
            style={ { width: number('Style.width', 200) } }
            theme={ select('Theme', ['primary', 'secondary', 'transparent']) }
          >
            { boolean('Image', false) ? <img src="" alt="" /> : null }
            <div><p>{ text('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit') }</p></div>
          </Placeholder>
        </StoryItem>
      </Row>
    </div>
  ));
