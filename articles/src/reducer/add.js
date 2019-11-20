import {
    FETCH_ADD_START, 
    FETCH_ADD_SUCCESS,
    FETCH_ADD_FAILURE,
} from '../action/add';


const initialState = {
    isLoading: false,
    error: null,
    added: false
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ADD_START:
            return {
                ...state, 
                isLoading: true
            };
        case FETCH_ADD_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                added: true
            };
        case FETCH_ADD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        
        default:
            return state;
    }
}

// use useFetch custom hook.
// {
//   "id": 1,
//   "title": "Updated A test Title",
//   "summary": "Updated This is a little summary about the article..",
//   "link": "https://www.britannica.com/topic/Pokemon-electronic-game",
//   "image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
//   "user_id": 1,
//   "category": "Updated Test Article"
// }
