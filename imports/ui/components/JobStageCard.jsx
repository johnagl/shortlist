import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';

export default class JobStageCard extends Component {
    render() {
        return (
            <div className="jobStageCardStyle">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle  className="jobStageText">Shortlist</CardTitle>
                    <CardText></CardText>
                    <AddButtonModal/>
                </Card>
            </div>                                    
        )
    }
}

// const jobStageCardStyle = {
//     width: '350px'
// }
