export const addJob = (job) => dispatch => {
    dispatch({
        type: 'ADD_JOB',
        payload: job
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