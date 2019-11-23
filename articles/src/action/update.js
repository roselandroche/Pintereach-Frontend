import api from '../utils/api'

export const FETCH_UPDATE_START = 'FETCH_UPDATE_START';
export const FETCH_UPDATE_SUCCESS = 'FETCH_UPDATE_SUCCESS';
export const FETCH_UPDATE_FAILURE = 'FETCH_UPDATE_FAILURE';

export const updateArticle = () => dispatch => {

    dispatch({ type: FETCH_UPDATE_START })

    api()
        .put(`api/articles/:id`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_UPDATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_UPDATE_FAILURE, payload: err.response })
        })


        api()
            .put(`api/articles/${foobar.id}`, foobar)
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_UPDATE_SUCCESS })
            })
            .catch(err => {
                console.log(err.response)
                dispatch({ type: FETCH_UPDATE_FAILURE })
            })
        }
    )
}