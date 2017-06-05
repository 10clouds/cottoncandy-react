import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import { Input } from './stories/Input';

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
      </div>
    );
  }
}

export default App;
