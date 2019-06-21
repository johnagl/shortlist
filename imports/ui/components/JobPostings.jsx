import React from 'react';
import { Component } from 'react';
import JobCard from './JobCard.jsx';
// import '../../../client/main.css';
import uuid from 'uuid';

export default class JobPostings extends Component {
 
    render() {
        const { jobs } = this.props;
        const jobList = jobs.map(job => {
           return(
            <div className="posting" key={job.id}>
                <JobCard id={ job.id } title={ job.title } company={ job.company } statusID={ job.statusID }/>
            </div>
           );
        })
        return (
            <div>
                <h2>Job Postings</h2>
                <div className="posting-list">
                    { jobList }
                </div>
            </div>
        )
    }    
  }