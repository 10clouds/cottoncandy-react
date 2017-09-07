import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import H1 from '../lib/H1';
import H2 from '../lib/H2';
import H3 from '../lib/H3';
import P from '../lib/P';
import Hint from '../lib/Hint';
import Link from '../lib/Link';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Typography', '', () => (
    <div>
      <Row title="H1">
        <H1 theme="primary">
          Example heading
        </H1>
      </Row>
      <Row title="H2">
        <H2 theme="primary">
          Example heading
        </H2>
      </Row>
      <Row title="H3">
        <H3 theme="primary">
          Example heading
        </H3>
      </Row>
      <Row title="Paragraph">
        <P theme="primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum enim ac erat scelerisque, sed ultrices arcu facilisis. Duis vel turpis faucibus, fringilla eros quis, dignissim ex. Sed eu velit facilisis, consequat dolor vel, pulvinar lorem. Aenean cursus sem justo, a rutrum lorem lacinia quis. Mauris efficitur orci elit, a iaculis mauris auctor sit amet. Nulla eget ligula vel justo suscipit laoreet. In sit amet arcu a felis luctus sagittis vel ut ex. Sed tincidunt, arcu mattis vehicula lobortis, metus lacus dictum odio, tempus suscipit odio nisl vitae turpis. Etiam odio leo, porttitor ac egestas in, tempor vel ex. Phasellus cursus imperdiet lectus eget eleifend. Sed elementum convallis felis vel convallis. Integer ac volutpat dolor. Nunc lacus sem, pharetra a risus a, interdum gravida enim. Sed id lectus eget ex scelerisque dignissim id at libero. Nulla egestas felis urna, nec sodales lectus tincidunt quis. Donec consequat lobortis magna, vitae cursus lacus faucibus a. Vivamus fringilla quam eros, ut scelerisque mi ultricies in. Cras eget velit magna. Proin eu justo ut lacus aliquet tempor. Mauris vulputate sodales pretium. Donec sed ligula porta, venenatis urna non, aliquam turpis. Suspendisse nec mollis leo. Phasellus posuere iaculis sapien. In eget orci ultricies, molestie urna vel, vehicula eros. Suspendisse vitae placerat ante. Proin eu orci vehicula, malesuada dui vitae, gravida nisi.
        </P>
      </Row>
      <Row title="Hint">
        <Hint theme="primary">
          Example hint
        </Hint>
      </Row>
      <Row title="Link">
        <Link href="#" theme="primary">
          Example link
        </Link>
      </Row>

      <Row title="Playground">
        <StoryItem>
          <H1 style={ { color: text('Style.color') } }>
            { text('Content', 'Heading') }
          </H1>
        </StoryItem>
      </Row>
    </div>
  ));
