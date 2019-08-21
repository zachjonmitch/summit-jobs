import React, { Component } from 'react';

import './Filters.css';

class JobSearchFilters extends Component {
  render() {
    return (
      <section className="job-search-filters">
        <div className="container">
          <ul className="job-filters-list m-0 p-0">
            <li>Company</li>
            <li>Location</li>
            <li>Job Type</li>
            <li>Sort by:</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default JobSearchFilters;