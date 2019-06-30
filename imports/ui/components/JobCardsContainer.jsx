import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard.jsx';
import { Droppable } from "react-beautiful-dnd";

const JobCardsContainer = ({ stage, jobs }) => {
    
    let jobCards = jobs.map((jobCard,index) => {
        return(
            <JobCard 
                key={jobCard.id} 
                id={jobCard.id} 
                title={jobCard.title} 
                company={jobCard.company}
                index={index}
            />
        )               
    })

    return (
        <Droppable droppableId={String(stage.id)}>
            {provided => (
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    className="jobCardsContainer"
                >
                    { jobCards }
                    { provided.placeholder }
                </div>
            )}
        </Droppable>
    )
}

export default JobCardsContainer;

// const mapStateToProps = (state) => {
//     return { jobs: state.jobs.jobs }
// }

// export default connect(mapStateToProps)(JobCardsContainer);