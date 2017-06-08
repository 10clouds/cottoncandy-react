import React, { Component } from 'react';
import './App.css';
import { Title, Subtitle } from './lib/Title';
import { Button } from './lib/Button';
import { Input } from './lib/Input';
import { RadioInput } from './lib/RadioInput';
import { RadioLabel } from './lib/RadioLabel';

class App extends Component {
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
          <RadioLabel htmlFor="ice-cream">Ice cream</RadioLabel>
        </p>
        <p>
          <RadioInput type="radio" id="cotton-candy" name="radio-group" />
          <RadioLabel htmlFor="cotton-candy">Cotton candy</RadioLabel>
        </p>
      </div>
    );
  }
}

export default App;
