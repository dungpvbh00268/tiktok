import { constants } from "."

const initialValue = {
    todos: [],
    todo: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case constants.SET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case constants.SET_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case constants.DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }

        default:
            throw new Error('Action invalid!')
    }
}

const setTodo = payload => ({
    type: constants.SET_TODO,
    payload
})

const setTodos = payload => ({
    type: constants.SET_TODOS,
    payload
})

const deleteTodo = payload => ({
    type: constants.DELETE_TODO,
    payload
})

export { initialValue, setTodo, setTodos, deleteTodo }
export default reducer