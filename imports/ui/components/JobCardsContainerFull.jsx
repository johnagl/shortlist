import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobStageCardFull from './JobStageCardFull.jsx';
import JobCardsContainer from './JobCardsContainer.jsx';
import './JobCardsContainerFull.css';
import { fetchJobs, fetchStages } from '../actions/index';
import { Input } from 'reactstrap';


class JobCardsContainerFull extends Component {

    state = {
        search: '',
    }

    componentDidMount(){
        this.props.fetchStages(this.props.stagesList);
        this.props.fetchJobs(this.props.jobsList);
    }

    onChangeJobSearch = (e) => this.setState(
        { [e.target.name]: e.target.value }
      );

    render() {
        let jobStageCards = this.props.stages.allIds.map(stageId => {
            let jobIds = this.props.stages.byId[stageId].jobs;
            let stage = this.props.stages.byId[stageId];
            let jobs = [];
            for(let _id of jobIds) {
                // if(this.props.jobs.byId[_id].company.toLowerCase().includes(this.state.search.toLowerCase())){
                    jobs.push(this.props.jobs.byId[_id]);
                // };
            }

            return (
                <div key={stage._id} className='columnStyle'>
                    {stage.title == 'Interested' ?
                    <React.Fragment>
                        <JobStageCardFull stage={stage} jobs={jobs}/>
                        <JobCardsContainer
                            search={this.state.search}
                            stage={stage}
                            jobs={jobs}
                            direction={this.props.direction}/>
                        {/* This is the search input  */}

                        <Input
                            style={inputStyle}
                            type="text hidden"
                            name="search"
                            autoComplete="off"
                            id="search"
                            placeholder="Filter Jobs"
                            value = {this.state.search}
                            onChange = {this.onChangeJobSearch}
                        />
                    </React.Fragment> :
                    <React.Fragment>
                        <JobStageCardFull stage={stage} jobs={jobs}/>
                        <JobCardsContainer
                            search={this.state.search}
                            stage={stage}
                            jobs={jobs}
                            direction={this.props.direction}
                        />
                    </React.Fragment>
                    }

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

//STYLE FOR SEARCH INPUT
inputStyle = {
    position: 'fixed',
    width: '200px',
    bottom: '16%',
    right: '4%',
    zIndex: '2',
}

const mapStateToProps = (state) => {
    return { stages: state.jobs.stages, jobs: state.jobs.jobs, view: state.jobs.view }
}


export default connect(mapStateToProps, { fetchJobs, fetchStages })(JobCardsContainerFull);