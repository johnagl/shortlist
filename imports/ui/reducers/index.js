import { combineReducers } from 'redux';
import uuid from 'uuid';

initState = {
    jobs: [
        {
            id: uuid.v4(),
            company: 'Amazon',
            title: 'Software Developer Co-op',
            stageID: 1,
            url: null,
            salary: null,
            dateAdded: new Date(),
            isExpanded: false,
            statusID: 1
        },
        {
            id: uuid.v4(),
            company: 'Hootsuite',
            title: 'Full Stack Developer Co-op',
            stageID: 3,
            url: 'https://careers.hootsuite.com/global/en/job/1738832/Junior-Software-Developer',
            salary: null,
            dateAdded: new Date(),
            isExpanded: false,
            statusID: 1
        },
        {
            id: uuid.v4(),
            company: 'SAP',
            title: 'Agile Developer Intern',
            stageID: 2,
            url: null,
            salary: 4100,
            dateAdded: new Date(),
            isExpanded: false,
            statusID: 1
        }
    ],
    stages: [
        {id: 1, description: 'Shortlist'},
        {id: 2, description: 'Phone Interview'},
        {id: 3, description: 'Applied'}
    ],
    status: [
        {id: 1, description: 'In Progress'},
        {id: 2, description: 'Offer'},
        {id: 3, description: 'Rejected'}
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

const statusReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const stagesReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}



export default combineReducers({
    jobs: jobsReducer,
    stages: stagesReducer,
    status: statusReducer
});