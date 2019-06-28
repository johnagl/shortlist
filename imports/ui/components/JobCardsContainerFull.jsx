import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard.jsx';
import JobStageCardFull from './JobStageCardFull.jsx';
import './JobCardsContainerFull.css';

class JobCardsContainerFull extends Component {
    render() {
        let jobStageCards = this.props.stages.map(stage => {
            let jobCards = this.props.jobs.map(jobCard => {
                if (jobCard.stage === stage.description){
                    return (
                        <JobCard id={jobCard.id} title={jobCard.title} company={jobCard.company}/>                
                    )
                }
            })
            return (
                <Col className='columnStyle' xs="6" sm="3">
                    <JobStageCardFull stage={stage.description}/>
                    { jobCards }
                </Col>
            )
        })
        return (
            
            <div className="jobCardsContainerFull" >
                <Container fluid >
                    <Row className='noFlexWrap'>
                        {jobStageCards}                       
                    </Row>
                </Container>  
 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { stages: state.jobs.stages, jobs: state.jobs.jobs }
}

const colStyle = {
    borderRight: '1px solid red',
}

const containerStyle = {
    padding: '10px',
    backgroundColor: 'red'
}

export default connect(mapStateToProps)(JobCardsContainerFull);

