import { combineReducers } from 'redux';
import uuid from 'uuid';
import Jobs from '../../api/jobs.js';

// let initState2 = Jobs.find({}).fetch();
// Jobs.find({}).fetch();

initState = {
    view : 'Full',
    stages : {
        byId : {
            "0": {
                _id: "0",
                jobs: [],
                color: "#000000",
                title: "Shortlist"
            },
            "1": {
                _id: "1",
                jobs: [],
                color: "#CCCCCC",
                title: "Applied"
            }
        },
        allIds : ["0", "1"]
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
            var newStagesById = Object.assign({}, state.stages.byId);
            var newJobsById = Object.assign({}, state.jobs.byId);
            delete newJobsById.action._id;

            return {
                ...state,
                stages: {
                    ...state.stages,
                    byId: newStagesById,
                    allIds: [...state.stages.allIds,]
                },
                jobs: {
                    ...state.jobs,
                    byId: newJobsById,
                    allIds: state.jobs.allIds.filter(jobId => jobId !== action._id)
                }
            }
            // console.log('_id : ' + action._id);
            // console.log('stageID :' + action.stageID);
            // var newState = state;

            // console.log("BEFORE:" + JSON.stringify(newState.stages.byId[action.stageID].jobs));

            // var filter1 = state.stages.byId[action.stageID].jobs.filter(jobId => jobId !== action._id);
            // // newState.stages.byId[action.stageID].jobs = filter1;

            // console.log("AFTER:" + JSON.stringify(newState.stages.byId[action.stageID].jobs));

            // let filter2 = newState.jobs.allIds.filter(jobId => jobId !== action._id);
            // // newState.jobs.allIds = filter2;

            // delete newState.jobs.byId[action._id];

            // console.log("NEW STATE:" + JSON.stringify(newState));

            // return newState;
            // // return {
            // //     ...state,
            // //     jobs: [...state.jobs.filter(job => job._id !== action._id)]
            // // }
        
        case 'DRAG_HAPPENED' :
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart, 
                droppableIndexEnd, 
                draggableId
            } = action.payload;

            const newStages = state.stages;
            console.log("BEFORE: " + JSON.stringify(newStages));

            if(droppableIdStart === droppableIdEnd) {
                const list = newStages.byId[droppableIdStart].jobs;
                const jobId = list.splice(droppableIndexStart, 1);
                list.splice(droppableIndexEnd, 0, ...jobId);

                newStages.byId[droppableIdEnd] = {
                    ...newStages.byId[droppableIdEnd],
                    jobs: list,
                };

            } else {
                const listStart = newStages.byId[droppableIdStart].jobs;
                const jobId = listStart.splice(droppableIndexStart, 1);
                const listEnd = newStages.byId[droppableIdEnd].jobs;
                listEnd.splice(droppableIndexEnd, 0, ...jobId);

                newStages.byId[droppableIdStart] = {
                    ...newStages.byId[droppableIdStart],
                    jobs: listStart
                }

                newStages.byId[droppableIdEnd] = {
                    ...newStages.byId[droppableIdEnd],
                    jobs: listEnd
                }
            }

            console.log("AFTER: " + JSON.stringify(newStages));

            // return {
            //     ...state,
            //     stages: newStages
            // }
            return {
                view : 'Full',
                stages : {
                    byId : {
                        "0": {
                            _id: "0",
                            jobs: ["0", "1"],
                            color: "#000000",
                            title: "Shortlist"
                        },
                        "1": {
                            _id: "1",
                            jobs: [],
                            color: "#CCCCCC",
                            title: "Applied"
                        }
                    },
                    allIds : ["0", "1"]
                },
                jobs : {
                    byId : {
                        "0": {
                            _id: "0",
                            company: "Amazon",
                            title: "Software Engineer",
                        },
                        "1": {
                            _id: "1",
                            company: "Microsoft",
                            title: "Software Developer",
                        }
                    },
                    allIds: ["0", "1"]
                }
            }
                   
        case 'TOGGLE_JOB_CARD':
            return state;
        
        default: 
            return state;
    }
}

// const stagesReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'FETCH_STAGES':
//             let byId = {};
//             let allIds = [];
//             // console.log("PAYLOAD: " + JSON.stringify(action.payload));

//             for(let stage of action.payload) {
//                 byId[stage._id] = stage;
//                 allIds.push(stage._id);
//             }
//             // console.log("BY ID: " + JSON.stringify(byId));
//             // console.log("BY ALLIDS: " + JSON.stringify(allIds));

//             return {
//                 ...state,
//                 stages: {
//                     byId: byId,
//                     allIds: allIds
//                 }
//             }

//         case 'ADD_JOB':
//             var addPromise = async () => {
//             let byIdStages = state.stages.byId;
//             let allIdsStages = state.stages.allIds;
//             byIdStages[action.stageId].jobs.push(action.payload._id);

//             let byIdJobs = state.jobs.byId;
//             let allIdsJobs = state.jobs.allIds;

//             byIdJobs[action.payload._id] = action.payload;
//             allIdsJobs.push(action.payload._id);

//             return {
//                 ...state,
//                 stages: {
//                     byId: byIdStages,
//                     allIds: allIdsStages
//                 },                
//                 jobs: {
//                     byId: byIdJobs,
//                     allIds: allIdsJobs
//                 }
//             }
//         }
//         default:
//             return state;
//     }
// }

// const viewReducer = (state = initState, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }



export default combineReducers({
    // view: viewReducer,
    // stages: stagesReducer,
    jobs: jobsReducer,
});