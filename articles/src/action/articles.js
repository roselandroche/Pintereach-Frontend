import api from '../utils/api';

export const ARTICLE_NAME = "ARTICLE_NAME";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";
export const ARTICLE_ERROR = "ARTICLE_ERROR";

export const article = () => {
    dispatchEvent({ type: ARTICLE_NAME});
    api().get(``)
    .then(res => {
        console.log(res.data)
        dispatchEvent({ type: ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatchEvent({ type: ARTICLE_ERROR, payload: err.response })
    });
};