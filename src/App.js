import React, { Component } from 'react';
import styled from 'styled-components';

import { Title, Subtitle } from './lib/Title';
import Button from './lib/Button';
import { Input } from './lib/Input';
import Checkbox from './lib/Checkbox';
import { CheckboxInput } from './lib/CheckboxInput';
import Radio from './lib/Radio';
import { Menu } from './lib/Menu';
import { Spinner } from './lib/Spinner';
import { ProgressBar } from './lib/ProgressBar';

import './App.css';
import Section from './components/Section';
import AppHeader from './components/AppHeader';

const InputGroupRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px 12px;

  > * {
    margin: 10px 18px;
  }
`

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

          <InputGroupRow>
            <InputGroup>
              <Radio
                checked
                id="radio-a"
                label="Radio box"
                name="radio-group-a"
              />
              <Radio
                id="radio-b"
                label="Radio box"
                name="radio-group-a"
              />
            </InputGroup>
            <InputGroup>
              <Radio
                checked
                id="radio-c"
                label="Radio box"
                name="radio-group-b"
                shadow
              />
              <Radio
                id="radio-d"
                label="Radio box"
                name="radio-group-b"
                shadow
              />
            </InputGroup>
          </InputGroupRow>

          <Subtitle>Checkboxes</Subtitle>

          <InputGroupRow>
            <InputGroup>
              <Checkbox
                checked
                id="checkbox-a"
                label="Check some option"
              />
              <Checkbox
                id="checkbox-b"
                label="Check some option"
              />
            </InputGroup>

            <InputGroup>
              <Checkbox
                checked
                id="checkbox-c"
                label="Check some option"
                shadow
              />
              <Checkbox
                id="checkbox-d"
                label="Check some option"
                shadow
              />
            </InputGroup>
          </InputGroupRow>

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
