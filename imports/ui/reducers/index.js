import { combineReducers } from 'redux';
import uuid from 'uuid';
import Jobs from '../../api/jobs.js';

// let initState2 = Jobs.find({}).fetch();
// Jobs.find({}).fetch();

initState = {
    view : 'Full',
    stages : {
        byId : {},
        allIds : []
    },
    jobs : {
        byId : {},
        allIds: []
    }
}

const jobsReducer = (state = initState, action) => {

    switch (action.type){
        case 'FETCH_JOBS':
            let byId = {};
            let allIds = [];

            for(let job of action.payload) {
                byId[job._id] = job;
                allIds.push(job._id);
            }
            // console.log("BY ID: " + JSON.stringify(byId));
            // console.log("BY ALLIDS: " + JSON.stringify(allIds));

            return {
                ...state,
                jobs: {
                    byId: byId,
                    allIds: allIds
                }
            }
        case 'ADD_JOB':
            // console.log(Jobs.find({}).toArray(());
            // console.log(initState2);

            let newById = state.jobs.byId;
            let newAllIds = state.jobs.allIds;

            newById[action.payload._id] = action.payload;
            newAllIds.push(action.payload._id);

            return {
                ...state,                
                jobs: {
                    byId: newById,
                    allIds: newAllIds
                }
            }
        
        case 'REMOVE_JOB':
            return {
                ...state,
                jobs: [...state.jobs.filter(job => job.id !== action.id)]
            }
        
        case 'DRAG_HAPPENED' :
            // const {
            //     droppableIdStart,
            //     droppableIdEnd,
            //     droppableIndexStart,
            //     droppableIndexEnd,
            //     draggableId
            // } = action.payload;

            // const newState = [...state];

            // if(droppableIdStart === droppableIdEnd) {

            // }
                   
        case 'TOGGLE_JOB_CARD':
            return state;
        
        default: 
            return state;
    }
}

const stagesReducer = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_STAGES':
            let byId = {};
            let allIds = [];
            // console.log("PAYLOAD: " + JSON.stringify(action.payload));

            for(let stage of action.payload) {
                byId[stage._id] = stage;
                allIds.push(stage._id);
            }
            // console.log("BY ID: " + JSON.stringify(byId));
            // console.log("BY ALLIDS: " + JSON.stringify(allIds));

            return {
                ...state,
                stages: {
                    byId: byId,
                    allIds: allIds
                }
            }

        case 'ADD_JOB':
            let newById = state.stages.byId;
            let newAllIds = state.stages.allIds;
            newById[action.stageId].jobs.push(action.payload._id);

            return {
                ...state,                
                stages: {
                    byId: newById,
                    allIds: newAllIds
                }
            }
        default:
            return state;
    }
}

const viewReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}



export default combineReducers({
    view: viewReducer,
    stages: stagesReducer,
    jobs: jobsReducer,
});