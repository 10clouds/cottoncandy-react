import React, { Component } from 'react';
import './App.css';
import { Title, Subtitle } from './components/Title';
import Button from './components/Button';
import { Input } from './components/Input';
import { CheckboxInput } from './components/CheckboxInput';
import { RadioInput } from './components/RadioInput';
import { Menu } from './components/Menu';
import { AppHeader } from './components/AppHeader';
import { NavLink } from './components/NavLink';
import { InlineLabel } from './components/InlineLabel';
import { Spinner } from './components/Spinner';
import { ProgressBar } from './components/ProgressBar';

class App extends Component {
  renderAppMenu() {
    let links = [
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

    return (
      <Menu links={links}/>
    );
  }

  render() {
    return (
      <div className="App">
        <Title>Cottoncandy UI kit</Title>

        <Subtitle>Buttons</Subtitle>
        <Button>Default button</Button>
        <Button primary>Primary button</Button>

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
        <AppHeader>
          {this.renderAppMenu()}
        </AppHeader>
      </div>
    );
  }
}

export default App;
