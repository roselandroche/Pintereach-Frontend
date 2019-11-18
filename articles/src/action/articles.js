import api from '../utils/api';
import UpdateArticle from '../components/UpdateArticle';

export const ADD_TITLE = "ADD_TITLE";
export const REMOVE_TITLE = "REMOVE_TITLE";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS"
export const ARTICLE_ERROR = "ARTICLE_ERROR";

export const addArticle = (title) => {
    return dispatch => {
    dispatch({ type: ADD_TITLE, payload: title });

    // api()
    //     .get(`api/articles/${title}`)
    //     .then(res => {
    //         console.log(res.data)
    //         dispatch({ type: ARTICLE_SUCCESS, payload: res.data });
    //     })
    //     .catch(err => {
    //         dispatch({ type: ARTICLE_ERROR, payload: err.response })
    //     });
    };
}

export function removeTitle(item) {
    return {
        type: REMOVE_TITLE,
        payload: item
    }
}
