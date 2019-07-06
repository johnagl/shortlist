import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import JobStageCardFull from './JobStageCardFull.jsx';
import JobCardsContainer from './JobCardsContainer.jsx';
import './JobCardsContainerFull.css';
import Jobs from '../../api/jobs.js';
import Stages from '../../api/stages.js';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { fetchJobs, fetchStages } from '../actions/index';


class JobCardsContainerFull extends Component {
    componentWillMount(){
        let stagesList;
        Tracker.autorun(() => {
            stagesList = Stages.find({}).fetch();
            // console.log("STAGES LIST: " + JSON.stringify(stagesList));
            this.props.fetchStages(stagesList);
        });

        let jobsList;
        Tracker.autorun(() => {
            jobsList = Jobs.find({}).fetch();
            // console.log("JOBS LIST: " + JSON.stringify(jobsList));
            this.props.fetchJobs(jobsList);
        });

        // stagesList = Stages.find({}).fetch();

        // this.props.fetchStages(stagesList);
        // jobsList = Jobs.find({}).fetch();
  
        // this.props.fetchJobs(jobsList);
        
    }

    render() {
        // console.log("STAGES: " + JSON.stringify(this.props.stages.allIds));
        // console.log("JobCardsContainerFull line 32: " + JSON.stringify(this.props.stages.allIds));
        let jobStageCards = this.props.stages.allIds.map(stageId => {
            // console.log("line 35: " + stageId);
            // console.log("line 36" + JSON.stringify(this.props.stages.byId[stageId]));
            let jobIds = this.props.stages.byId[stageId].jobs;
            // console.log("JOBIDS: " + JSON.stringify(jobIds));
            let stage = this.props.stages.byId[stageId];
            let jobs = [];
            for(let id of jobIds) {
                // console.log("in loop " + JSON.stringify(this.props.jobs.byId[id]));
                jobs.push(this.props.jobs.byId[id]);
            }
            // console.log("JOBSSSS: " + JSON.stringify(jobs));
            // let jobs = this.props.jobs.allIds.filter(job => job.stage === stage.description)

            return (
                <div key={stage._id} className='columnStyle'>
                    <JobStageCardFull stage={stage} jobs={jobs}/>
                    <JobCardsContainer stage={stage} jobs={jobs} direction={this.props.direction}/>
                </div>
            )
        })

        return (
            <div className="jobCardsContainerFull">
                {jobStageCards}                       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { stages: state.jobs.stages, jobs: state.jobs.jobs, view: state.jobs.view }
}

export default connect(mapStateToProps, { fetchJobs, fetchStages })(JobCardsContainerFull);

