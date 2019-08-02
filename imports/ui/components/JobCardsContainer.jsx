import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard.jsx';
import { Droppable } from "react-beautiful-dnd";

class JobCardsContainer extends Component {
    
    render() {
        const { stage, jobs, view, direction } = this.props;
        // console.log('STAGE IN JOB CARDS CONTAINER: ' + JSON.stringify(stage));
        // console.log('STAGEID IN JOB CARDS CONTAINER: ' + JSON.stringify(stage.stageId));

        let jobCards = jobs.map((job, index) => {
            return(
                <JobCard key={job._id} job={job} color={stage.color} index={index} stage={stage} />
            )               
        })
    
        return (
            <Droppable droppableId={String(stage._id)} direction={direction}>
                {provided => (
                    <div 
                        {...provided.droppableProps} 
                        ref={provided.innerRef} 
                        className= "jobCardsContainer">
                        { jobCards }
                        { provided.placeholder }
                    </div>
                )}
            </Droppable>
        );
    }
}


const mapStateToProps = (state) => {
    return { 
        view: state.jobs.view,
        stages: state.jobs.stages
    }
}

export default connect(mapStateToProps)(JobCardsContainer);