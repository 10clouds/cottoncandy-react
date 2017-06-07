import React, { Component } from 'react';
import './App.css';
import { Button } from './lib/Button';
import { Input } from './lib/Input';
import { RadioInput } from './lib/RadioInput';
import { RadioLabel } from './lib/RadioLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cottoncandy UI kit</h1>
        <h2>Buttons</h2>
        <Button>Default button</Button>
        <Button primary>Primary button</Button>
        <h2>Inputs</h2>
        <Input />
        <h2>Radio</h2>
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
