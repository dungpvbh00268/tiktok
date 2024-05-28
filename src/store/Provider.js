import Content from './Context'
import { useReducer } from 'react'
import reducer, { initialValue } from './reducer'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <Content.Provider value={[state, dispatch]}>
            {children}
        </Content.Provider>
    )
}
export default Provider