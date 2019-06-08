import React from 'react';
import { Component } from 'react';
import JobCard from './JobCard.jsx';
// import '../../../client/main.css';
import uuid from 'uuid';

export default class JobPostings extends Component {
 
    render() {
        const { postings } = this.props;
        const jobList = postings.map(posting => {
           return(
            <div>
                <JobCard id={ posting.id }title={ posting.title } company={ posting.company } status={ posting.status }/>
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