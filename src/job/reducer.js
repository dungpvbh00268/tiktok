const SET_JOB = 'SET_JOB'
const SET_JOBS = 'SET_JOBS'
const DELETE_JOB = 'DELETE_JOB'
const initialValue = {
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
            throw new Error('Invalid action!')
    }
}

export const setJob = payload => ({
    type: SET_JOB,
    payload
})

export const setJobs = payload => ({
    type: SET_JOBS,
    payload
})

export const deleteJob = payload => ({
    type: DELETE_JOB,
    payload
})

export { initialValue }
export default reducer