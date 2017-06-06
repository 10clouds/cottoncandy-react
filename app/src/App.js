import React, { Component } from 'react';
import './App.css';
import { Button } from './lib/Button';
import { Input } from './lib/Input';
import { Radio } from './lib/Radio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>10Clouds React UI Kit</h2>
        </div>
        <h1>UI kit docs</h1>
        <h2>Buttons</h2>
        <Button children="Test"/>
        <h2>Inputs</h2>
        <Input />
        <h2>Radio</h2>
        <Radio />
      </div>
    );
  }
}

export default App;
