import React, { Component } from 'react';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import CountBubble from './CountBubble';


export default class JobStageCardFull extends Component {
    render() {
        return (
            <div className="jobStageCardContainer">
                <div className = "jobStageTitle jobStageText">{this.props.stage.title}</div>
                <div>
                {
                    this.props.jobs.length > 0 ?
                    <CountBubble count={this.props.jobs.length} /> :
                    null
                }
                <AddButtonModal stage={this.props.stage} stageTitle={this.props.stage.title}stagesList={this.props.stagesList} />
                </div>
            </div>                                    
        )
    }
}