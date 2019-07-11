import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'
import Stages from '../../api/stages.js';
import CountBubble from './CountBubble';


export default class JobStageCardFull extends Component {
    render() {
        return (
            <div className="jobStageCardContainer">
                <div className = "jobStageTitle jobStageText">{this.props.stage.title}</div>
                {
                    this.props.jobs.length > 0 ?
                    <CountBubble count={this.props.jobs.length} /> :
                    null
                }
                <AddButtonModal />
            </div>                                    
        )
    }
}