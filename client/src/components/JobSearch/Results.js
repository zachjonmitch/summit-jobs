import React, { Component } from 'react';
import { Consumer } from '../../context';

import './Results.css';

class JobSearchResults extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { jobs } = value;

          const jobResults = jobs.map((job, index) => {
            const { description } = job;
            const limit = 150;
            let jobSnippet;

            if (job.description.length <= limit) {
              jobSnippet = (
                <p className="job-result-description">{description}</p>
              )
            } else {
              jobSnippet = (
                <p className="job-result-description">{description.substring(0, limit) + "..."}</p>
              )
            }
            
            return (
              <div className="job-result" key={index}>
                <a href={job.link}>
                  <h4 className="job-result-title mt-0">{job.title}</h4>
                </a>
                <ul className="job-info-list m-0 p-0">
                  <li className="job-result-location">{job.location}</li>
                  <li className="job-result-date">{job.date}</li>
                  <li className="job-result-company">{job.company}</li>
                </ul>
                {jobSnippet}
                <a className="job-result-link" href={job.link}>See more</a>
              </div>
            );
          })
          return (
            <section className="job-search-results">
              <div className="container">
                {jobResults}
              </div>
            </section>
          )
        }}
      </Consumer>
    );
  }
}

export default JobSearchResults;