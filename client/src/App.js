import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from './context';
import Home from './pages/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
