import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import JobStageCardFull from './JobStageCardFull.jsx';
import JobCardsContainer from './JobCardsContainer.jsx';
import './JobCardsContainerFullSecond.css';

class JobCardsContainerFullSecond extends Component {
    render() {
        let jobStageCards = this.props.stages.map(stage => {
            let jobs = this.props.jobs.filter(job => job.stage === stage.description)

            return (
                <div key={stage.id} className='rowStyle'>
                    <JobStageCardFull  style={jobStageCardStyle} stage={stage.description}/>
                    <JobCardsContainer  stage={stage} jobs={jobs} direction={this.props.direction}/>
                </div>
            )
        })

        return (
            <div className="jobCardsContainerFullSecond">
                {jobStageCards}                       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { stages: state.jobs.stages, jobs: state.jobs.jobs }
}

jobStageCardStyle = {
    width: '250px',
    marginRight: '50px'
}

// render() {
//     let jobStageCards = this.props.stages.map(stage => {
//         let jobCards = this.props.jobs.map(jobCard => {
//             if (jobCard.stage === stage.description){
//                 return (
//                     <JobCard id={jobCard.id} title={jobCard.title} company={jobCard.company}/>                
//                 )
//             }
//         })
//         return (
//             <Col className='columnStyle' xs="6" sm="3">
//                 <JobStageCardFull stage={stage.description}/>
//                 { jobCards }
//             </Col>
//         )
//     })
//     return (
        
//         <div className="jobCardsContainerFull" >
//             <Container fluid >
//                 <Row className='noFlexWrap'>
//                     {jobStageCards}                       
//                 </Row>
//             </Container>  

//         </div>
//     )
// }





// return (
            
//     <div className="jobCardsContainerFull">
//         <Container fluid >
//             <Row className='noFlexWrap'>
//                 {jobStageCards}                       
//             </Row>
//         </Container>  
//     </div>
// )

export default connect(mapStateToProps)(JobCardsContainerFullSecond);

