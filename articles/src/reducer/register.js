import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_ERROR,
} from '../action/register';

const initialState ={
    isLoading: false,
    error: null,
    users: [],
}

export function reducer(state =initialState, action) {
    switch(action.type) {
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                error: null
            }
        case FETCH_REGISTER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}