import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard.jsx';
import { Droppable } from "react-beautiful-dnd";

class JobCardsContainer extends Component {

    shouldComponentUpdate(nextProps) {
        return true;
    }
    
    render() {
        console.log("actually rendered jobcardscontainer");
        const { stage, jobs, view, direction } = this.props;

        let jobCards = jobs.map((job, index) => {
            // console.log("Job cards container line 9 " + JSON.stringify(job));
            return(
                <JobCard 
                    key={job._id} 
                    id={job._id} 
                    title={job.title} 
                    company={job.company}
                    color={stage.color}
                    index={index}
                    stage ={stage}
                />
            )               
        })
    
        return (
            <Droppable droppableId={String(stage._id)} direction={direction}>
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
        );
    }
}

// const JobCardsContainer = ({ stage, jobs, view, direction }) => {
//     console.log("actually rendered jobcardscontainer");
    
//     let jobCards = jobs.map((job, index) => {
//         // console.log("Job cards container line 9 " + JSON.stringify(job));
//         return(
//             <JobCard 
//                 key={job._id} 
//                 id={job._id} 
//                 title={job.title} 
//                 company={job.company}
//                 color={stage.color}
//                 index={index}
//                 stage ={stage}
//             />
//         )               
//     })

//     return (
//         <Droppable droppableId={String(stage._id)} direction={direction}>
//             {provided => (
//                 <div 
//                     {...provided.droppableProps} 
//                     ref={provided.innerRef} 
//                     className= {view === 'Full' ? 'jobCardsContainer' : 'jobCardsContainerSecond'}
                    
//                 >
//                     { jobCards }
//                     { provided.placeholder }
//                 </div>
//             )}
//         </Droppable>
//     )
// }

const inlineFlex = {
    display: 'inline-flex'
}


const mapStateToProps = (state) => {
    return { 
        view: state.jobs.view,
        stages: state.jobs.stages
     }
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