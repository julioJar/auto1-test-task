import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
