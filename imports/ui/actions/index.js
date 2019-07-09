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
 
    let id = job._id;
    Meteor.call('jobs.insert', job);
    
    Meteor.call('stages.insertJob', stageId, id);

    let allJobs = Meteor.call('jobs.listAll');
    console.log('ALL JOBS : ' + allJobs)

    // dispatch({
    //     type: 'ADD_JOB',
    //     payload: job,
    //     stageId: stageId
    // });
};


export const removeJob = (id , stageID) => dispatch => {
    Meteor.call('jobs.remove', id);
    Meteor.call('stages.removeJob', stageID, id);
    // dispatch({
    //     type: 'REMOVE_JOB',
    //     _id: id,
    //     stageID: stageID
    // }); 
};

export const toggleJobCard = (id) => {
    return {
        type: 'TOGGLE_JOB_CARD',
        payload: id
    };
};

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId) => dispatch => {
        // let sourceJobs = Stages.findOne({_id: droppableIdStart}).jobs; 
        // // sourceJobs = JSON.parse(sourceJobs);   
        // console.log("Source jobs before: " + JSON.stringify(sourceJobs));

        // let destJobs = Stages.findOne({_id: droppableIdEnd}).jobs;
        // console.log("Dest jobs before: " + JSON.stringify(destJobs));

        // if(droppableIdStart === droppableIdEnd) {
        //     // console.log("hi");
        //     const jobId = destJobs.splice(droppableIndexStart, 1);
        //     destJobs.splice(droppableIndexEnd, 0, ...jobId);
        //     console.log("Dest jobs after: " + JSON.stringify(destJobs));
        //     Stages.update({_id: droppableIdEnd}, {$set: {jobs: destJobs}});
        // } else {
        //     // console.log("yolo");
        //     const jobId = sourceJobs.splice(droppableIndexStart, 1);
        //     destJobs.splice(droppableIndexEnd, 0, ...jobId);
        //     Stages.update({_id: droppableIdStart}, {$set: {jobs: sourceJobs}});
        //     Stages.update({_id: droppableIdEnd}, {$set: {jobs: destJobs}});
        // }

        Meteor.call('stages.drag', droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId);

        // dispatch({
        //     type: 'DRAG_HAPPENED',
        //     payload: {
        //         droppableIdStart,
        //         droppableIdEnd,
        //         sourceJobs,
        //         destJobs
        //     }
        // });
};