import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './JobStageCard.css';
import AddButtonModal from './AddButtonModal.jsx';
import JobStageDropdown from './JobStageDropdown.jsx'

export default class JobStageCard extends Component {
    render() {
        return (
            <div className="jobStageCardStyle">
                <Card body inverse style={{ backgroundColor: '#eaeaea', borderColor: '#eaeaea' }}>
                    {/* <CardTitle  className="jobStageText">Shortlist</CardTitle> */}
                    <JobStageDropdown style={{margin: 'auto'}} />
                    <CardText></CardText>
                    <AddButtonModal />
                </Card>
            </div>                                    
        )
    }
}

// const jobStageCardStyle = {
//     width: '350px'
// }
