import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form className="search-form">
        <input 
          name="search"
          type="text"
          placeholder="Web Developer"
        />
      </form>
    );
  }
}

export default SearchForm;