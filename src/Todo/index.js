import React, { useState, useEffect, memo, useCallback, useReducer, useRef } from 'react';
import { setJob, setJobs, deleteJob } from './actions'
import reducer, { initialValue } from './reducer'
/* 
- Update DOM:
    + F8 blog tittle

- Call API:

- Listen DOM events
    - Scroll
    - Resize

- Cleanup
    -Remove listener / unsubscribe
    - clear timer
 */

// 1. useEffect(callback) -> ít dùng
// - Gọi callback sau khi component được re-render

// 2. useEffect(callback, []) -> nhiều dùng nhất
// - chỉ gọi callback sau khi component được mounted

// 3. useEffect(callback, [state]) -> nhiều dùng nhất
// - callback được gọi mỗi khi dependency thay đổi

//----------------------------------------------------------
// 1. call back luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted

function Content() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const { job, jobs } = state
    const inputRef = useRef()
    console.log(jobs)
    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }, [jobs])

    const handleInput = e => {
        dispatch(setJob(e.target.value))
    }

    const handleSubmit = () => {
        dispatch(setJobs(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    const handleDelete = index => {
        dispatch(deleteJob(index))
    }
    return (
        <>
            <h1>TODO</h1>
            <input
                ref={inputRef}
                value={job}
                onChange={handleInput}
                onKeyPress={e => {
                    e.key == 'Enter' && handleSubmit()
                }}
            />
            <button
                onClick={handleSubmit}
            >
                Add
            </button>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <span onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }}>&times;</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default memo(Content);