import api from '../utils/api'

export const FETCH_UPDATE_START = 'FETCH_UPDATE_START';
export const FETCH_UPDATE_SUCCESS = 'FETCH_UPDATE_SUCCESS';
export const FETCH_UDPATE_FAILURE = 'FETCH_UDPATE_FAILURE';

const updateArticle = () => {
    return (
        dispatch => {
            dispatch({ type: FETCH_UPDATE_START })

        api()
            .put(`api/articles/:id`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_UPDATE_SUCCESS })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_UDPATE_FAILURE })
            })
        }
    )
}