import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './components/questions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions/>
      </div>
    );
  }
}

export default App;
