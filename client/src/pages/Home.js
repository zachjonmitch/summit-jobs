import React, { Component } from 'react';

import Header from '../components/Header';
import JobSearch from '../components/JobSearch';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <JobSearch />
      </React.Fragment>
    );
  }
}

export default Home;