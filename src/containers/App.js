import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

App.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;
