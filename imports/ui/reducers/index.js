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
            var byIdStages = Object.assign({}, state.stages.byId);
            byIdStages[action.stageId].jobs.push(action.payload._id);

            var byIdJobs = Object.assign({}, state.jobs.byId);
            var allIdsJobs = Object.assign([], state.jobs.allIds);

            byIdJobs[action.payload._id] = action.payload;
            allIdsJobs.push(action.payload._id);

            return {
                ...state,
                stages: {
                    ...state.stages,
                    byId: byIdStages,
                },                
                jobs: {
                    ...state.jobs,
                    byId: byIdJobs,
                    allIds: allIdsJobs
                }
            }
        
        case 'REMOVE_JOB':
            var newStagesById = Object.assign({}, state.stages.byId);
            newStagesById[action.stageID].jobs = newStagesById[action.stageID].jobs.filter(jobId => jobId !== action._id);

            var newJobsById = Object.assign({}, state.jobs.byId);
            delete newJobsById[action._id];

            return {
                ...state,
                stages: {
                    ...state.stages,
                    byId: newStagesById,
                },
                jobs: {
                    ...state.jobs,
                    byId: newJobsById,
                    allIds: state.jobs.allIds.filter(jobId => jobId !== action._id)
                }
            }
        
        case 'DRAG_HAPPENED' :
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart, 
                droppableIndexEnd, 
                draggableId
            } = action.payload;

            const newStages = Object.assign({}, state.stages);
            // console.log("BEFORE: " + JSON.stringify(newStages));

            if(droppableIdStart === droppableIdEnd) {
                const list = state.stages.byId[droppableIdStart].jobs;
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

            // console.log("AFTER: " + JSON.stringify(newStages));

            return {
                ...state,
                stages: newStages
            }
            // return {
            //     view : 'Full',
            //     stages : {
            //         byId : {
            //             "0": {
            //                 _id: "0",
            //                 jobs: ["0", "1"],
            //                 color: "#000000",
            //                 title: "Shortlist"
            //             },
            //             "1": {
            //                 _id: "1",
            //                 jobs: [],
            //                 color: "#CCCCCC",
            //                 title: "Applied"
            //             }
            //         },
            //         allIds : ["0", "1"]
            //     },
            //     jobs : {
            //         byId : {
            //             "0": {
            //                 _id: "0",
            //                 company: "Amazon",
            //                 title: "Software Engineer",
            //             },
            //             "1": {
            //                 _id: "1",
            //                 company: "Microsoft",
            //                 title: "Software Developer",
            //             }
            //         },
            //         allIds: ["0", "1"]
            //     }
            // }        
        default: 
            return state;
    }
}

export default combineReducers({
    jobs: jobsReducer,
});