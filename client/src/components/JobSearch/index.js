import React, { Component } from 'react';

import Form from './Form';
import Filters from './Filters';
import Results from './Results';

class JobSearch extends Component {
  render() {
    return (
      <React.Fragment>
        <Form />
        <Filters />
        <Results />
      </React.Fragment>
    );
  }
}

export default JobSearch;