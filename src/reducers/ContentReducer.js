import { 
    FETCH_ERROR, 
    FETCH_START,
    CONTENT_FETCHED,
    } from '../actions/types';
const INITIAL_STATE = {
        content: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTENT_FETCHED:
            return { ...state, content: action.payload };
        case FETCH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_START:
            return { ...state, content: ''};
        default:
            return state;
    }
};