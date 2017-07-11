import React, { Component } from 'react';

import { Title, Subtitle } from './lib/Title';
import Button from './lib/Button';
import { Input } from './lib/Input';
import { CheckboxInput } from './lib/CheckboxInput';
import { RadioInput } from './lib/RadioInput';
import { Menu } from './lib/Menu';
import { InlineLabel } from './lib/InlineLabel';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader>
          <Title>Cottoncandy UI kit</Title>
        </AppHeader>

        <Section>
          <Subtitle>Buttons</Subtitle>
          <Button>Default button</Button>
          <Button primary>Primary button</Button>
        </Section>

        <Subtitle>Inputs</Subtitle>
        <Input />

        <Subtitle>Radio</Subtitle>
        <p>
          <RadioInput type="radio" id="ice-cream" name="radio-group" defaultChecked />
          <InlineLabel htmlFor="ice-cream">Ice cream</InlineLabel>
        </p>
        <p>
          <RadioInput type="radio" id="cotton-candy" name="radio-group" />
          <InlineLabel htmlFor="cotton-candy">Cotton candy</InlineLabel>
        </p>
        <p>
          <RadioInput shadow type="radio" id="lolipop" name="radio-group-2" defaultChecked />
          <InlineLabel htmlFor="lolipop">Lolipop</InlineLabel>
        </p>
        <p>
          <RadioInput shadow type="radio" id="candy" name="radio-group-2" />
          <InlineLabel htmlFor="candy">Candy</InlineLabel>
        </p>

        <Subtitle>Checkboxes</Subtitle>
        <p>
          <CheckboxInput type="checkbox" id="apple-pie" defaultChecked />
          <InlineLabel htmlFor="apple-pie">Apple pie</InlineLabel>
        </p>
        <p>
          <CheckboxInput type="checkbox" id="cheesecake" />
          <InlineLabel htmlFor="cheesecake">Cheesecake</InlineLabel>
        </p>
        <p>
          <CheckboxInput shadow type="checkbox" id="brownie" />
          <InlineLabel htmlFor="brownie">Brownie</InlineLabel>
        </p>

        <Subtitle>Spinners</Subtitle>
        <Spinner light />
        <Spinner small />

        <Subtitle>Progress bars</Subtitle>
        <ProgressBar />

        <Subtitle>Menu</Subtitle>

        <Menu links={MENU_LINKS}/>

      </div>
    );
  }
}

export default App;
