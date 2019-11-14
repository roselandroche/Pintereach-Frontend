import api from '../utils/api';

import {
    ADD_TITLE, 
    REMOVE_TITLE,
    ARTICLE_SUCCESS,
    ARTICLE_ERROR
} from '../action/articles';


const initialState = {
    title: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TITLE:
            return {
                ...state, 
                isLoading: true
            };
            case ARTICLE_SUCCESS:
                return {
                    ...state, 
                    title: action.payload,
                    isLoading: false
                };
                case ARTICLE_ERROR:
                    return {
                        ...state,
                        error: action.payload,
                        isLoading: true
                    }
        case REMOVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
                    default:
                        return state;
    }
}