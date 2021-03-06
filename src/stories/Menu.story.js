import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Row, StoryItem } from './utils.js';

import Menu from '../lib/Menu';

const stories = storiesOf('Core', module);

stories
  .addDecorator(withKnobs)
  .addWithInfo('Menu', '', () => (
    <div>
      <Row title="Simple menu">
        <StoryItem>
          <Menu links={[
            {
              link: 'http://10clouds.com/',
              name: 'Item 1',
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 2',
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 3',
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 4',
            }
          ]}/>
        </StoryItem>
      </Row>
      <Row title="Submenu">
        <StoryItem>
          <Menu links={[
            {
              link: 'http://10clouds.com/',
              name: 'Item 1'
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 2'
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 3',
              submenu: [
                {
                  link: 'http://10clouds.com/',
                  name: 'Subitem 1',
                },
                {
                  link: 'http://10clouds.com/',
                  name: 'Subitem 2',
                },
                {
                  link: 'http://10clouds.com/',
                  name: 'Subitem 3',
                }
              ]
            },
            {
              link: 'http://10clouds.com/',
              name: 'Item 4',
            }
          ]}/>
        </StoryItem>
      </Row>
      <Row title="Playground">
        <StoryItem>
          <Menu
            hoverLine={select('Hover line style', ['none', 'underline', 'bottom'], 'underline')}
            links={JSON.parse(
              text(
                'Links',
                JSON.stringify(
                  [
                    {
                      link: 'http://10clouds.com/',
                      name: 'Item 1'
                    },
                    {
                      link: 'http://10clouds.com/',
                      name: 'Item 2'
                    },
                    {
                      link: 'http://10clouds.com/',
                      name: 'Item 3',
                      submenu: [
                        {
                          link: 'http://10clouds.com/',
                          name: 'Subitem 1',
                        },
                        {
                          link: 'http://10clouds.com/',
                          name: 'Subitem 2',
                        },
                        {
                          link: 'http://10clouds.com/',
                          name: 'Subitem 3',
                        }
                      ]
                    },
                    {
                      link: 'http://10clouds.com/',
                      name: 'Item 4',
                    }
                  ],
                  null,
                  2
                )
              )
            )}
          />
          <div style={{height: '200px'}}></div>
        </StoryItem>
      </Row>
    </div>
  ));
