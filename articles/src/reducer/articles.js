import api from '../utils/api';

import {
    ARTICLE_NAME, 
    ARTICLE_SUCCESS,
    ARTICLE_ERROR
} from '../action/articles'
import { truncate } from 'fs';

const initialState = {
    articles: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ARTICLE_NAME:
            return {
                ...state, 
                isLoading: true
            };
            case ARTICLE_SUCCESS:
                return {
                    ...state, 
                    articles: action.payload,
                    isLoading: false
                };
                case ARTICLE_ERROR:
                    return {
                        ...state,
                        error: action.payload,
                        isLoading: true
                    };
                    default:
                        return state;
    }
}