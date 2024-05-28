import { useReducer, useState } from "react"
import Context from "./Context"
import reducer, { initialValue } from "./reducer"

function JobProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default JobProvider