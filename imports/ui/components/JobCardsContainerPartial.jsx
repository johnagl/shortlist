import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard.jsx';

class JobCardsContainerPartial extends Component {

    
    render() {
        let jobCards = this.props.jobs.map(jobCard => {
            return (
                <Col xs="6" sm="3" key={jobCard.id}>
                    <JobCard id={jobCard.id} title={jobCard.title} company={jobCard.company} statusID={jobCard.statusID}/>
                </Col>
            )
        })

        return (
            <div>
                <Container fluid style= {containerStyle}>
                    <Row>
                        {jobCards} 
                    </Row>
                </Container>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs.jobs }
}


const colStyle = {
    paddingTop: '15px',
    paddingBottom: '15px'
}

const containerStyle = {
    padding: '10px',
}



// let jobCards = this.props.jobs.map(jobCard => {
//     if (jobCard.stageID === 1 && this.props.currentStage === 'Shortlist'){
//         return (
//             <Col xs="6" sm="3">
//                 <JobCard key={jobCard.id} title={jobCard.title} company={jobCard.company}/>
//             </Col>
//         )
//     }
//     if (jobCard.stageID === 2 && this.props.currentStage === 'Phone Interview'){
//         return (
//             <Col xs="6" sm="3">
//                 <JobCard key={jobCard.id} title={jobCard.title} company={jobCard.company}/>
//             </Col>
//         )
//     }
//     if (jobCard.stageID === 3 && this.props.currentStage === 'Applied'){
//         return (
//             <Col xs="6" sm="3">
//                 <JobCard key={jobCard.id} title={jobCard.title} company={jobCard.company}/>
//             </Col>
//         )
//     }
// })

export default connect(mapStateToProps)(JobCardsContainerPartial);

