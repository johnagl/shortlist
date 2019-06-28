import { combineReducers } from 'redux';
import uuid from 'uuid';

initState = {
    view: 'Full',
    stages: [
        {description: 'Shortlist'},{description: 'Applied'}, {description: 'Phone Interview'},{description: 'On Site Interview'},{description: 'Offer'},{description: 'Rejected'}
    ],
    jobs: [
        {
            id: uuid.v4(),
            company: 'Amazon',
            title: 'Software Developer Co-op',
            stage: 'Shortlist',
            url: null,
            salary: null,
            isExpanded: false,
            dates: {
                dateAdded: new Date(),
                applicationDeadline: 'set date',
                applied: 'set date',
                phoneInterview: 'set date',
                onSiteInterview: 'set date',
                offer: 'set date',
                rejected: 'set date'
            }
        },
        {
            id: uuid.v4(),
            company: 'Hootsuite',
            title: 'Software Developer Co-op',
            stage: 'Applied',
            url: null,
            salary: null,
            isExpanded: false,
            dates: {
                dateAdded: new Date(),
                applicationDeadline: 'set date',
                applied: 'set date',
                phoneInterview: 'set date',
                onSiteInterview: 'set date',
                offer: 'set date',
                rejected: 'set date'
            }
        }, 
        {
            id: uuid.v4(),
            company: 'SAP',
            title: 'Software Developer Co-op',
            stage: 'Shortlist',
            url: null,
            salary: null,
            isExpanded: false,
            dates: {
                dateAdded: new Date(),
                applicationDeadline: 'set date',
                applied: 'set date',
                phoneInterview: 'set date',
                onSiteInterview: 'set date',
                offer: 'set date',
                rejected: 'set date'
            }
        }
    ]


}


const jobsReducer = (state = initState, action) => {

    switch (action.type){
        case 'ADD_JOB':
            return {
                ...state,                
                jobs: [...state.jobs, action.payload]
            }
        
        case 'REMOVE_JOB':
            return {
                ...state,
                jobs: [...state.jobs.filter(job => job.id !== action.id)]
            }
                   
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