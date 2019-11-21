import api from '../utils/api';

export const FETCH_ADD_START = 'FETCH_ADD_START';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_FAILURE = 'FETCH_ADD_FAILURE';

export const postArticle = (title) => dispatch => {

    dispatch({ type: FETCH_ADD_START, payload: title });

    api()
        .post('api/articles', title)
        .then((res) => {
            dispatch({ type: FETCH_ADD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_ADD_FAILURE, payload: err.response.error })
        })
}
