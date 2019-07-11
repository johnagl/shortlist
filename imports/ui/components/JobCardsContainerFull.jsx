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

    componentDidMount(){
        // let stages = [];
        // this.props.stages.allIds.forEach(stageId => {
        //     stages.push(this.props.stages.byId[stageId]);
        // });
        // this.props.fetchStages(this.props.stages.allIds);
        // this.props.fetchJobs(this.props.jobsList);
    }

    render() {
        console.log("ALL STAGES: " + JSON.stringify(this.props.stages));
        // console.log(this.props.jobsList);
        // console.log("STAGES: " + JSON.stringify(this.props.stages.allIds));
        // console.log("JobCardsContainerFull line 32: " + JSON.stringify(this.props.stages.allIds));
        let jobStageCards = this.props.stages.allIds.map(stageId => {
            let jobIds = this.props.stages.byId[stageId].jobs;
            let stage = this.props.stages.byId[stageId];
            let jobs = [];
            for(let _id of jobIds) {
                // if(this.props.jobs.byId[_id]) {
                    jobs.push(this.props.jobs.byId[_id]);
                // }
            }

            console.log("JOBS line 69:" + JSON.stringify(jobs));

        // let jobStageCards = this.props.stages.allIds.map(stageId => {
        //     // console.log("line 35: " + stageId);
        //     // console.log("line 36" + JSON.stringify(this.props.stages.byId[stageId]));
        //     let jobIds = this.props.stages.byId[stageId].jobs;
        //     // console.log("JOBIDS: " + JSON.stringify(jobIds));
        //     let stage = this.props.stages.byId[stageId];
        //     let jobs = [];
        //     for(let id of jobIds) {
        //         // console.log("in loop " + JSON.stringify(this.props.jobs.byId[id]));
        //         jobs.push(this.props.jobs.byId[id]);
        //     }
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

