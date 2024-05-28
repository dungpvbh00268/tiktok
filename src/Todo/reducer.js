import { SET_JOB, SET_JOBS, DELETE_JOB } from './contant'

export const initialValue = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('jobs')) || []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case SET_JOBS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Action invalid!')
    }
}

export default reducer