import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <section className="search full">
        <div className="container flex-center">
          <form className="search-form">
            <input 
              name="search"
              type="text"
              placeholder="Web Developer"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default SearchForm;