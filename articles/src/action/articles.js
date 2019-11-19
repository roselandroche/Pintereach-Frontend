import api from '../utils/api';
import UpdateArticle from '../components/UpdateArticle';
import { connect } from 'formik';

// define types
export const ADD_TITLE = "ADD_TITLE";
export const REMOVE_TITLE = "REMOVE_TITLE";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS"
export const ARTICLE_ERROR = "ARTICLE_ERROR";

export const POST_ADD_TITLE = "POST_ADD_TITLE";
export const POST_REMOVE_TITLE = "POST_REMOVE_TITLE";
export const POST_ARTICLE_SUCCESS = "POST_ARTICLE_SUCCESS"
export const POST_ARTICLE_ERROR = "POST_ARTICLE_ERROR";

// action creator
export const addArticle = (title) => {
    return dispatch => {
    dispatch({ type: ADD_TITLE, payload: title });
    };
}

export const postTitle = (title) => dispatch => {
    dispatchEvent({ type: POST_ADD_TITLE });

    api()
        .post('' , title)
        .then((res) => {
            dispatchEvent({ type: POST_ARTICLE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatchEvent({ type: POST_ARTICLE_ERROR, payload: err.response. error })
        })
}

export function removeTitle(item) {
    return {
        type: REMOVE_TITLE,
        payload: item
    }
}

// export default connect({ postArticle }updateArticle) or (addArticle)