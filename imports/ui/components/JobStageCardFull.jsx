import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'

export default class JobStageCardFull extends Component {
    render() {
        return (
            <div className="jobStageCardContainer">
                <Card body inverse className='jobStageCardStyle' >
                    <CardTitle className = "jobStageText">{this.props.stage}</CardTitle>
                    <CardText className="jobStageText">0 Jobs</CardText>
                    <AddButtonModal />
                </Card>
            </div>                                    
        )
    }
}