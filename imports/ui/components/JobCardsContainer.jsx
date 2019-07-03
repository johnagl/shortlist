import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard.jsx';
import { Droppable } from "react-beautiful-dnd";

const JobCardsContainer = ({ stage, jobs, view, direction }) => {
    
    let jobCards = jobs.map((jobCard,index) => {
        return(
            <JobCard 
                key={jobCard.id} 
                id={jobCard.id} 
                title={jobCard.title} 
                company={jobCard.company}
                color={stage.color}
                index={index}
            />
        )               
    })

    return (
        <Droppable droppableId={String(stage.id)} direction={direction}>
            {provided => (
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    className= {view === 'Full' ? 'jobCardsContainer' : 'jobCardsContainerSecond'}
                    
                >
                    { jobCards }
                    { provided.placeholder }
                </div>
            )}
        </Droppable>
    )
}

const inlineFlex = {
    display: 'inline-flex'
}


const mapStateToProps = (state) => {
    return { view: state.jobs.view }
}

export default connect(mapStateToProps)(JobCardsContainer);
// export default JobCardsContainer;

// const mapStateToProps = (state) => {
//     return { jobs: state.jobs.jobs }
// }

// export default connect(mapStateToProps)(JobCardsContainer);

{/* <div 
{...provided.droppableProps} 
ref={provided.innerRef} 
className="jobCardsContainer"

>
{ jobCards }
{ provided.placeholder }
</div> */}