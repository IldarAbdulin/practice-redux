import { Types } from "../types"

const initialState = {
    loading: false,
    error: null,
    todos: [],
    todo: {}
}

export const todosreducer = (state = initialState, action) => {
    switch (action.type){
        case Types.ISLOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.GET_TODOS: 
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case Types.GET_TODO:
            return {
                ...state,
                loading: false,
                todo: action.payload
            }
        case Types.ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}