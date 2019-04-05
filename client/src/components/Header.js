import React, { Component } from 'react';

import './Header.css';
import logo from '../summit-logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="logo-wrap text-center">
          <img src={logo} alt="Summit Jobs logo" className="logo" />
        </div>
      </header>
    );
  }
}

export default Header;