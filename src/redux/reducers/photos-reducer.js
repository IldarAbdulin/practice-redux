import { Types } from "../types"

const initialState = {
    loading: false,
    error: null,
    photos: []
}

export const photosReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ISLOADING: 
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.GET_PHOTOS: 
            return {
                ...state,
                loading: false,
                photos: action.payload
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