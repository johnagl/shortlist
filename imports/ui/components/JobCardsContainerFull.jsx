import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobStageCardFull from './JobStageCardFull.jsx';
import JobCardsContainer from './JobCardsContainer.jsx';
import './JobCardsContainerFull.css';
import { fetchJobs, fetchStages } from '../actions/index';


class JobCardsContainerFull extends Component {

    componentDidMount(){
        this.props.fetchStages(this.props.stagesList);
        this.props.fetchJobs(this.props.jobsList);
    }

    render() {
        let jobStageCards = this.props.stages.allIds.map(stageId => {
            let jobIds = this.props.stages.byId[stageId].jobs;
            let stage = this.props.stages.byId[stageId];
            let jobs = [];
            for(let _id of jobIds) {
                jobs.push(this.props.jobs.byId[_id]);
            }

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

