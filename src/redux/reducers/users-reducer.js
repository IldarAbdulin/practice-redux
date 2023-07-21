import { Types } from "../types"

const intitialState = {
    loading: false,
    error: null,
    users: [],
    user: {}
}

export const usersReducer = (state = intitialState, action) => {
    switch(action.type) {
        case Types.ISLOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.GET_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case Types.GET_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case Types.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}