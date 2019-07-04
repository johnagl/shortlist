import Jobs from '../../api/jobs.js';

export const fetchJobs = (jobs) => dispatch => {
    dispatch({
        type: 'FETCH_JOBS',
        payload: jobs
    })
}

export const addJob = (job) => dispatch => {
    // console.log(Jobs.find({}).fetch());
    let id = Jobs.insert(job);
    let j = Jobs.findOne({_id: id});
    // console.log("JOB: " + JSON.stringify(j));
    dispatch({
        type: 'ADD_JOB',
        payload: j
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