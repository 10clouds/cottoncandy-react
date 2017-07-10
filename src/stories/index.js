import React from 'react';

import { storiesOf, configure, setAddon } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import infoAddon from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Button from '../components/Button';
import Welcome from './Welcome';

// TODO: Export to .css
const StoryItem = (props) => (
  <div style={ { margin: '0 16px' } }>
    { props.title &&
        <h2 style={ { fontFamily: 'sans-serif', textAlign: 'center', margin: '6px 0' }}>
          { props.title }
        </h2>
    }
    <p>{ props.description }</p>
    <div style={ { display: 'flex', 'justifyContent': 'center'} }>
      { props.children }
    </div>
  </div>
);

const Row = (props) => (
  <div style={ { marginBottom: '32px' } }>
    { props.title &&
        <h1 style={ { fontFamily: 'sans-serif', textAlign: 'center', margin: '12px 0' }}>
          { props.title }
        </h1>
    }
    <div style={ { display: 'flex', 'justifyContent': 'center'} }>
      { props.children }
    </div>
  </div>
)

setAddon(infoAddon);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Core', module)
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
        <StoryItem title="Small size">
          <Button size="small">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Medium size">
          <Button size="medium">
            Hello Button
          </Button>
        </StoryItem>
        <StoryItem title="Big size">
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
