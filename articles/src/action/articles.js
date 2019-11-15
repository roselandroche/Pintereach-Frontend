import api from '../utils/api';

export const ADD_TITLE = "ADD_TITLE";
export const REMOVE_TITLE = "REMOVE_TITLE";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS"
export const ARTICLE_ERROR = "ARTICLE_ERROR";

export const addArticle = () => {
    dispatchEvent({ type: ADD_TITLE, payload: title });
    api().get(`https://pintreachbackend.herokuapp.com/api/articles/${title}`)
    .then(res => {
        console.log(res.data)
        dispatchEvent({ type: ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatchEvent({ type: ARTICLE_ERROR, payload: err.response })
    });
};

export function removeTitle(item) {
    return {
        type: REMOVE_TITLE,
        payload: item
    }
}
