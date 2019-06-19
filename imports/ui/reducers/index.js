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
            statusID: 2
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
            statusID: 3
        }
    ],
    stages: [
        {id: 1, description: 'Shortlist'},
        {id: 2, description: 'Phone Interview'},
        {id: 3, description: 'Applied'}
    ],
    status: [
        {id: 1, description: 'In Progress'},
        {id: 2, description: 'Accepted'},
        {id: 3, description: 'Rejected'}
    ]
}


const jobsReducer = (state = initState, action) => {

    switch (action.type){
        case 'ADD_JOB':
            return state;
        
        case 'REMOVE_JOB':
            return state;
        
        case 'TOGGLE_JOB_CARD':
            return state;
        
        default: 
            return state;
    }

}

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER'){
        return count + action.payload;
    }
    return count;
}

export default combineReducers({
    count: counterReducer,
    jobs: jobsReducer
});