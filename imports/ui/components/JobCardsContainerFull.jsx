import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import JobCard from './JobCard.jsx';

class JobCardsContainerFull extends Component {
    render() {
        // let jobCards = this.props.jobs.map(jobCard => {
        //     return (
        //         <Col xs="6" sm="3">
        //             <JobCard key={jobCard.id} title={jobCard.title} company={jobCard.company}/>
        //         </Col>
        //     )
        // })
        
        return (
            <div>
                <Container fluid style= {containerStyle}>
                    <Row>
                        
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
    padding: '10px'
}

export default connect(mapStateToProps)(JobCardsContainerFull);

