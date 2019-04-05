import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

import './Form.css';

class JobSearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(dispatch, event) {
    event.preventDefault();
    axios.post('api/scrape', { query: this.state.query })
      .then(res => {
        dispatch({
          type: 'UPDATE_JOBS',
          payload: res.data
        })
      })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <section className="job-search">
              <div className="container">
                <div className="job-search-wrap text-center">
                  <form className="job-search-form" onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <input 
                      className="job-search-input"
                      name="query"
                      type="text"
                      placeholder="Software Engineer"
                      onChange={this.handleChange}
                    />
                  </form>
                </div>
              </div>
            </section>
          )
        }}
      </Consumer>
    );
  }
}

export default JobSearchForm;