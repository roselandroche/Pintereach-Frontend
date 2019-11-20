import {
    FETCH_UPDATE_START,
    FETCH_UPDATE_SUCCESS,
    FETCH_UPDATE_FAILURE,
} from '../action/update';

const initialState = {
    isLoading: false,
    error: null,
    posted: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_UPDATE_START: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_UPDATE_SUCCESS: 
            return {
                ...state,
                posted: true
            }
        case FETCH_UPDATE_FAILURE: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}