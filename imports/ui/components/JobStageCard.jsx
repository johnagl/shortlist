import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'

export default class JobStageCard extends Component {
    render() {
        return (
            <div className="jobStageCardContainer">
                <Card body inverse className='jobStageCardStyle' >
                    <JobStageDropdown style={{margin: 'auto'}} />
                    <CardText></CardText>
                    <AddButtonModal floating={false}/>
                </Card>
            </div>                                    
        )
    }
}

