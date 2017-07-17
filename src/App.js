import React, { Component } from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from './lib/Title';
import Button from './lib/Button';
import { Input } from './lib/Input';
import Checkbox from './lib/Checkbox';
import InputGroup from './lib/InputGroup';
import Radio from './lib/Radio';
import { Menu } from './lib/Menu';
import { Spinner } from './lib/Spinner';
import { ProgressBar } from './lib/ProgressBar';

import './App.css';
import Section from './components/Section';
import AppHeader from './components/AppHeader';

let MENU_LINKS = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About us',
    link: '/about'
  },
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'Clients',
    link: '/clients'
  },
];

const PageWrapper = styled.div`
  background-color: #fff;
  margin: auto;
  max-width: 1200px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageWrapper>

          <AppHeader />

          <Section>
            <Subtitle>Buttons</Subtitle>
            <Button>Default button</Button>
            <Button primary>Primary button</Button>
          </Section>

          <Subtitle>Radio</Subtitle>

          <InputGroup>
            <Radio
              checked
              label="Radio box"
              name="radio-group-a"
            />
            <Radio
              label="Radio box"
              name="radio-group-a"
            />
            <Radio
              checked
              label="Radio box"
              name="radio-group-b"
              shadow
            />
            <Radio
              label="Radio box"
              name="radio-group-b"
              shadow
            />
          </InputGroup>

          <Subtitle>Checkboxes</Subtitle>

          <InputGroup>
            <Checkbox
              checked
              label="Check some option"
            />
            <Checkbox
              label="Check some option"
            />
            <Checkbox
              checked
              label="Check some option"
              shadow
            />
            <Checkbox
              label="Check some option"
              shadow
            />
          </InputGroup>

          <Subtitle>Spinners</Subtitle>
          <Spinner light />
          <Spinner small />

          <Subtitle>Progress bars</Subtitle>
          <ProgressBar />

          <Subtitle>Menu</Subtitle>

          <Menu links={MENU_LINKS}/>
        </PageWrapper>
      </div>
    );
  }
}

export default App;
