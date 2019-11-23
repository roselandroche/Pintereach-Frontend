import {
    FETCH_UPDATE_START,
    FETCH_UPDATE_SUCCESS,
    FETCH_UPDATE_FAILURE,
} from '../action/update';

const initialState = {
    isLoading: false,
    error: null,
    posted: false,
    
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
                posted: true,
                isLoading: false,
            }
        case FETCH_UPDATE_FAILURE: 
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}