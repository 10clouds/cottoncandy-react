import React, { Component } from 'react';
import './App.css';
import { Button } from './lib/Button';
import { Input } from './lib/Input';

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
      </div>
    );
  }
}

export default App;
