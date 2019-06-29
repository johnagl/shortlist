import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Droppable } from "react-beautiful-dnd";
import JobCard from './JobCard.jsx';
import './JobCardsContainerFull.css';

class JobCardsContainerFull extends Component {
    render() {
        const { id, stage } = this.props;

        let jobCards = this.props.jobs.map(jobCard => {
            if (jobCard.stage === stage){
                return (
                    <JobCard key={jobCard.id} id={jobCard.id} title={jobCard.title} company={jobCard.company}/>                
                )
        }
    })
        return (
            <div className="jobCardsContainerFull" >
                { jobCards }
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


// return (
//     <Col className='columnStyle' xs="6" sm="3">
//         <JobStageCardFull stage={stage.description}/>
//         { jobCards }
//     </Col>
// )

export default connect(mapStateToProps)(JobCardsContainerFull);