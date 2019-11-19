import {
    ADD_TITLE, 
    REMOVE_TITLE,
    ARTICLE_SUCCESS,
    ARTICLE_ERROR,

    POST_ADD_TITLE,
    POST_REMOVE_TITLE,
    POST_ARTICLE_SUCCESS,
    POST_ARTICLE_ERROR,
} from '../action/articles';


const initialState = {
    id: Date.now(),
    title: "",
    summary: "",
    link: "",
    image: "",
    user_id: 1,
    category: "",

    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TITLE:
            return {
                ...state, 
                isLoading: true
            };
        case ARTICLE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                title: action.payload
            };
        case ARTICLE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case REMOVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case POST_ADD_TITLE:
            return {
                ...state,
                isLoading: false
            }
        case POST_REMOVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case POST_ARTICLE_SUCCESS:
            return {
                ...state,
                title: action.payload,
                isLoading: false
            }
        case POST_ARTICLE_ERROR:
            return {
                ...state,
                title: action.payload,
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
