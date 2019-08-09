import { Meteor } from 'meteor/meteor';

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

export const fetchEvents = (jobs) => dispatch => {
    dispatch({
        type: 'FETCH_EVENTS',
        payload: jobs
    })
}

export const addJob = (job, stageIdUnique, stageId) => dispatch => {
    dispatch({
        type: 'ADD_JOB',
        payload: job,
        stageId: stageIdUnique
    });
 
    let id = job._id;
    Meteor.call('jobs.insert', job);
    Meteor.call('stages.insertJob', stageId, id);

};

export const editJob = (job, oldStageId, newStageId, indexStart) => dispatch => {
    dispatch({
        type: 'EDIT_JOB',
        payload: job,
        oldStageId: oldStageId,
        newStageId: newStageId,     
    });


    Meteor.call('jobs.update', job);

    if(oldStageId != newStageId) {
        Meteor.call('stages.drag', oldStageId, newStageId, indexStart, 0, job._id);
    }
}

export const editJobEvent = (event, jobId, start, end, company, jobsList) => dispatch => {
    dispatch({
        type: 'EDIT_JOB_EVENT',
        payload: event,
        jobId: jobId,
        start: start,
        end: end,
        jobs: jobsList,
        company: company
    });

    if (event.type == 'phone interview'){
        Meteor.call('jobs.updatePhoneInterview', jobId, start, end, company);
    }
    if (event.type == 'on site interview'){
        Meteor.call('jobs.updateOnSiteInterview', jobId, start, end, company);
    }
    

}


export const removeJob = (id, stageID, stageIdUnique) => dispatch => {
    dispatch({
        type: 'REMOVE_JOB',
        _id: id,
        stageIdUnique: stageIdUnique
    });

    Meteor.call('jobs.remove', id);
    Meteor.call('stages.removeJob', stageID, id);
};

export const toggleJobCard = (id) => {
    return {
        type: 'TOGGLE_JOB_CARD',
        payload: id
    };
};

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId) => dispatch => {
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

        Meteor.call('stages.drag', droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId);
};