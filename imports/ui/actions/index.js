import Jobs from '../../api/jobs.js';
import Stages from '../../api/stages.js';
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

export const addJob = (job, stageId) => dispatch => {

    dispatch({
        type: 'ADD_JOB',
        payload: job,
        stageId: stageId
    });
 
    let id = job._id;
    Meteor.call('jobs.insert', job);
    
    Meteor.call('stages.insertJob', stageId, id);

    let allJobs = Meteor.call('jobs.listAll');
};


export const removeJob = (id , stageID) => dispatch => {
    dispatch({
        type: 'REMOVE_JOB',
        _id: id,
        stageID: stageID
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