import React, { Component } from 'react';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';


export default class JobStageCardFull extends Component {

    render() {
        let count = this.props.jobs.length + " " + (this.props.jobs.length === 1 ? "Job" : "Jobs");
        
        return (
            <div className="jobStageCardContainer">
                <div className = "jobStageTitle jobStageText">
                    {this.props.stage.title}
                </div>
                <span>{ count }</span>
                <div className = "job-stage-header">
                    <AddButtonModal stage={this.props.stage} stageTitle={this.props.stage.title}stagesList={this.props.stagesList} />
                </div>
            </div>
        )
    }
}
