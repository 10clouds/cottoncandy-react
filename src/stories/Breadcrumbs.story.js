import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Breadcrumbs from '../lib/Breadcrumbs';
import { Row, StoryItem } from './utils.js';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Breadcrumbs', '', () => (
    <div>
      <Row title="Theme">
        <StoryItem title="Default">
          <Breadcrumbs
            links={[
              {"href" : "https://10clouds.com", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"},
              {"href" : "https://10clouds.com", "text" : "Third page"}
              ]}
          />
        </StoryItem>
        <StoryItem title="With shadow">
          <Breadcrumbs
            withShadow
            links={[
              {"href" : "https://10clouds.com", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"},
              {"href" : "https://10clouds.com", "text" : "Third page"}
              ]}
          />
        </StoryItem>
      </Row>

      <Row title="Crumb style">
        <StoryItem title="As icon">
          <Breadcrumbs
            links={[
              {"href" : "https://10clouds.com", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
          <Breadcrumbs
            withShadow
            links={[
              {"href" : "https://10clouds.com", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
        </StoryItem>
        <StoryItem title="As text">
          <Breadcrumbs
            links={[
              {"href" : "https://10clouds.com", "text": "Main page"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
          <Breadcrumbs
            withShadow
            links={[
              {"href" : "https://10clouds.com", "text": "Main page"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
        </StoryItem>
      </Row>
      <Row>
        <StoryItem title="Icon and text">
          <Breadcrumbs
            links={[
              {"href" : "https://10clouds.com", "text": "Main page", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
          <Breadcrumbs
            withShadow
            links={[
              {"href" : "https://10clouds.com", "text": "Main page", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page"}
              ]}
          />
        </StoryItem>
      </Row>
      <Row>
        <StoryItem title="Icon and text on all crumbs">
          <Breadcrumbs
            links={[
              {"href" : "https://10clouds.com", "text": "Main page", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page", "icon": "fa fa-binoculars"},
              {"href" : "https://10clouds.com", "text" : "Third page", "icon": "fa fa-cutlery"}
              ]}
          />
          <Breadcrumbs
            withShadow
            links={[
              {"href" : "https://10clouds.com", "text": "Main page", "icon": "fa fa-home"},
              {"href" : "https://10clouds.com", "text" : "Second page", "icon": "fa fa-binoculars"},
              {"href" : "https://10clouds.com", "text" : "Third page", "icon": "fa fa-cutlery"}
              ]}
          />
        </StoryItem>
      </Row>
    </div>
  ));
