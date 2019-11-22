import api from '../utils/api';

export const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_ERROR = 'FETCH_REGISTER_ERROR';

export const registerUser = (user, props) => {
    return (
        dispatch => {
            dispatch({ type: FETCH_REGISTER_REQUEST })
        
        api()
            .post('/api/auth/register', user)
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_REGISTER_SUCCESS, payload: res.data })
            })

            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_REGISTER_ERROR })
            })

        }

    )
}