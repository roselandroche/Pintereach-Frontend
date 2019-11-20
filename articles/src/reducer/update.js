import {
    FETCH_UPDATE_START,
    FETCH_UPDATE_SUCCESS,
    FETCH_UDPATE_FAILURE,
} from '../action/update';

const initialState = {
    isLoading: false,
    error: null,
    
}

export function reducer(state = initialState, action) {
    switch(action.type) {

        default:
            return state;
    }
}