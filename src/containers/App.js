import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
        <h3>Check the <Link to='/list'>Merchants List</Link></h3>
        { this.props.children }
      </div>
    );
  }
}

App.defaultProps = {
  children: null
};

App.propTypes = {
  children: PropTypes.objectOf(PropTypes.any)
};

export default App;
