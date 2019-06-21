export const increment = (amount) => {
    return {
        type: 'INCREMENT_COUNTER',
        payload: amount
    };
};

export const addJob = (job) => {
    return {
        type: 'ADD_JOB',
        payload: job
    };
};

export const removeJob = (id) => {
    return {
        type: 'REMOVE_JOB',
        payload: id
    };
};

export const toggleJobCard = (id) => {
    return {
        type: 'TOGGLE_JOB_CARD',
        payload: id
    };
};