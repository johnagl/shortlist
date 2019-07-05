import Jobs from '../../api/jobs.js';
import Stages from '../../api/stages.js';

export const fetchJobs = (jobs) => dispatch => {
    dispatch({
        type: 'FETCH_JOBS',
        payload: jobs
    })
}

export const fetchStages = (stages) => dispatch => {
    dispatch({
        type: 'FETCH_STAGES',
        payload: stages
    })
}

export const addJob = (job, stageId) => dispatch => {
    // console.log(Jobs.find({}).fetch());
    let id = Jobs.insert(job);

    console.log("Actions line 21: " + JSON.stringify(job));
    console.log("id " + id);
    console.log("Actions line 22: " + JSON.stringify(stageId));
    Stages.update(
    { _id : stageId},
    { $push: {"jobs": id}}
    );

    let j = Jobs.findOne({_id: id});
    console.log("JOB: " + JSON.stringify(j));
    dispatch({
        type: 'ADD_JOB',
        payload: j,
        stageId: stageId
    });
};


export const removeJob = (id) => dispatch => {
    dispatch({
        type: 'REMOVE_JOB',
        id: id
    }); 
};

export const toggleJobCard = (id) => {
    return {
        type: 'TOGGLE_JOB_CARD',
        payload: id
    };
};

export const sort = (
        droppableIdStart, 
        droppableIdEnd, 
        droppableIndexStart, 
        droppableIndexEnd, 
        draggableId
    ) => dispatch => {
        dispatch({
            type: 'DRAG_HAPPENED',
            payload: {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            }
        });
};