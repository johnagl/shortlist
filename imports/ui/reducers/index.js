import { combineReducers } from 'redux';
import uuid from 'uuid';

initState = {
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
                jobs: [...state.jobs, action.payload]
            }
        
        case 'REMOVE_JOB':
            return {
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