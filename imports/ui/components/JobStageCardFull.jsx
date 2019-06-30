import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'

export default class JobStageCardFull extends Component {
    render() {
        return (
            <div className="jobStageCardContainer">
                <div className = "jobStageText">{this.props.stage}</div>
                <div className="jobStageText">0 Jobs</div>
                <AddButtonModal />
            </div>                                    
        )
    }
}