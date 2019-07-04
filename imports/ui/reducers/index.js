import { combineReducers } from 'redux';
import uuid from 'uuid';
import Jobs from '../../api/jobs.js';

// let initState2 = Jobs.find({}).fetch();
// Jobs.find({}).fetch();

initState = {
    view: 'Full',
    stages: [
        {id: uuid.v4(), description: 'Shortlist', color: "#EE6352"},
        {id: uuid.v4(), description: 'Applied', color: "#FFB43D"},
        {id: uuid.v4(), description: 'Phone Interview', color: "#46B4A4"},
        {id: uuid.v4(), description: 'On Site Interview', color: "#1A80E0"},
        {id: uuid.v4(), description: 'Offer', color: "#7A00D8"},
        {id: uuid.v4(), description: 'Rejected', color: "#000000"}
    ],
    
    jobs: [
        // {
        //     _id: uuid.v4(),
        //     company: 'Amazon',
        //     title: 'Software Developer Co-op',
        //     stage: 'Shortlist',
        //     url: null,
        //     salary: null,
        //     isExpanded: false,
        //     dates: {
        //         dateAdded: new Date(),
        //         applicationDeadline: 'set date',
        //         applied: 'set date',
        //         phoneInterview: 'set date',
        //         onSiteInterview: 'set date',
        //         offer: 'set date',
        //         rejected: 'set date'
        //     }
        // },
        // {
        //     _id: uuid.v4(),
        //     company: 'Hootsuite',
        //     title: 'Software Developer Co-op',
        //     stage: 'Applied',
        //     url: null,
        //     salary: null,
        //     isExpanded: false,
        //     dates: {
        //         dateAdded: new Date(),
        //         applicationDeadline: 'set date',
        //         applied: 'set date',
        //         phoneInterview: 'set date',
        //         onSiteInterview: 'set date',
        //         offer: 'set date',
        //         rejected: 'set date'
        //     }
        // }, 
        // {
        //     _id: uuid.v4(),
        //     company: 'SAP',
        //     title: 'Software Developer Co-op',
        //     stage: 'Shortlist',
        //     url: null,
        //     salary: null,
        //     isExpanded: false,
        //     dates: {
        //         dateAdded: new Date(),
        //         applicationDeadline: 'set date',
        //         applied: 'set date',
        //         phoneInterview: 'set date',
        //         onSiteInterview: 'set date',
        //         offer: 'set date',
        //         rejected: 'set date'
        //     }
        // }
    ]


}


const jobsReducer = (state = initState, action) => {

    switch (action.type){

        case 'FETCH_JOBS':
            return {
                ...state,
                jobs: action.payload
            }
        case 'ADD_JOB':
            // console.log(Jobs.find({}).toArray(());
            // console.log(initState2);
            return {
                ...state,                
                jobs: [...state.jobs, action.payload]
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

// const statusReducer = (state = initState, action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }

// const stagesReducer = (state = initState, action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }



export default combineReducers({
    jobs: jobsReducer,
    // stages: stagesReducer,
    // status: statusReducer
});