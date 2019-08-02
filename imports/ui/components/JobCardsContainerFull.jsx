import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobStageCardFull from './JobStageCardFull.jsx';
import JobCardsContainer from './JobCardsContainer.jsx';
import './JobCardsContainerFull.css';
import { fetchJobs, fetchStages } from '../actions/index';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class JobCardsContainerFull extends Component {

    state = {
        search: ''
    }

    componentDidMount(){
        this.props.fetchStages(this.props.stagesList);
        this.props.fetchJobs(this.props.jobsList);
    }

    onChangeJobSearch = (e) => this.setState(
        { [e.target.name]: e.target.value }
      );


    render() {
    
        // console.log('THIS PROPS STAGES : ' + JSON.stringify(this.props.stages));
        // console.log('THIS PROPS STAGES ALLID: ' + JSON.stringify(this.props.stages.allIds));
        // console.log('this.props.jobs :' + JSON.stringify(this.props.jobs));
        let jobStageCards = this.props.stages.allIds.map(stageId => {
            let jobIds = this.props.stages.byId[stageId].jobs;
            // console.log('this.props.stages.byId[stageId].jobs ' + JSON.stringify(jobIds));
            let stage = this.props.stages.byId[stageId];
            let jobs = [];
            for(let _id of jobIds) {
                if(this.props.jobs.byId[_id].company.toLowerCase().includes(this.state.search.toLowerCase())){
                    jobs.push(this.props.jobs.byId[_id]);

                };
                
            }

            return (
                <div key={stage._id} className='columnStyle'>
                    <Input type="text hidden" name="search" autoComplete="off" id="search" placeholder="Filter Jobs" value = {this.state.search} onChange = {this.onChangeJobSearch} />
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

