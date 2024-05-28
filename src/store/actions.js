import { constants } from "./contants"

export const setTodo = payload => ({
    type: constants.SET_TODO,
    payload
})

export const setTodos = payload => ({
    type: constants.SET_TODOS,
    payload
})

export const deleteTodo = payload => ({
    type: constants.DELETE_TODO,
    payload
})

