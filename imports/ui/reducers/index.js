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
            var byId = {};
            var allIds = [];

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
        case 'FETCH_STAGES':
            var byId = {};
            var allIds = [];
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
            // console.log(Jobs.find({}).toArray(());
            // console.log(initState2);
            var byIdStages = state.stages.byId;
            var allIdsStages = state.stages.allIds;
            // console.log(JSON.stringify(action.stageId));
            // console.log(JSON.stringify(byIdStages));
            // console.log(JSON.stringify(byIdStages[action.stageId]));
            byIdStages[action.stageId].jobs.push(action.payload._id);

            var byIdJobs = state.jobs.byId;
            var allIdsJobs = state.jobs.allIds;

            byIdJobs[action.payload._id] = action.payload;
            allIdsJobs.push(action.payload._id);

            return {
                ...state,
                stages: {
                    byId: byIdStages,
                    allIds: allIdsStages
                },                
                jobs: {
                    byId: byIdJobs,
                    allIds: allIdsJobs
                }
            }
        
        case 'REMOVE_JOB':
            console.log('_id : ' + action._id);
            console.log('stageID :' + action.stageID);
            // return {
            //     ...state,
            //     jobs: [...state.jobs.filter(job => job._id !== action._id)]
            // }
        
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
            var addPromise = async () => {
            let byIdStages = state.stages.byId;
            let allIdsStages = state.stages.allIds;
            byIdStages[action.stageId].jobs.push(action.payload._id);

            let byIdJobs = state.jobs.byId;
            let allIdsJobs = state.jobs.allIds;

            byIdJobs[action.payload._id] = action.payload;
            allIdsJobs.push(action.payload._id);

            return {
                ...state,
                stages: {
                    byId: byIdStages,
                    allIds: allIdsStages
                },                
                jobs: {
                    byId: byIdJobs,
                    allIds: allIdsJobs
                }
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
    // view: viewReducer,
    // stages: stagesReducer,
    jobs: jobsReducer,
});