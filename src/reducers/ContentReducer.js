import { 
    FETCH_ERROR, 
    FETCH_START,
    CONTENT_FETCHED,
    } from '../actions/types';
const INITIAL_STATE = {
        item: 'intro'
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTENT_FETCHED:
            return { ...state, item: action.payload };
        case FETCH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_START:
            return { ...state, item: ''};
        default:
            return state;
    }
};