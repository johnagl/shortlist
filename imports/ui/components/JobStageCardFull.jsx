import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'
import Stages from '../../api/stages.js';
import CountBubble from './CountBubble';


export default class JobStageCardFull extends Component {
    render() {
        // console.log('STAGE :' + JSON.stringify(this.props.stage))
        // console.log('JOB STAGE CARD FULL STAGESLIST :' + JSON.stringify(this.props.stagesList));
        return (
            <div className="jobStageCardContainer">
                <div className = "jobStageTitle jobStageText">{this.props.stage.title}</div>
                {
                    this.props.jobs.length > 0 ?
                    <CountBubble count={this.props.jobs.length} /> :
                    null
                }
                <AddButtonModal stage={this.props.stage.stageId}stageTitle={this.props.stage.title}stagesList={this.props.stagesList} />
            </div>                                    
        )
    }
}