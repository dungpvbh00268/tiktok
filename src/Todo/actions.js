import {SET_JOB, SET_JOBS, DELETE_JOB} from './contant'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const setJobs = payload => {
    return {
        type: SET_JOBS,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}