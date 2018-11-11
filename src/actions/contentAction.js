import { 
    FETCH_ERROR, 
    FETCH_START,
    CONTENT_FETCHED,
    } from './types';
import prayerData from '../assets/contents.json';


export const fetchContentRemote = (page) => {
    return (dispatch) => {
        fetch('../assets/contents.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('data fetched from json:', JSON.stringify(data));
            dispatch({ type: CONTENT_FETCHED, payload: data.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCH_ERROR, payload: error });
        });
        // fetch(CONTENT.concat(page))
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res.data);
        //         dispatch({ type: CONTENT_FETCHED, payload: res.data.content });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch({ type: FETCH_ERROR, payload: error });
        //     });
    };
};
export const fetchContentInit = () => {
    return {
        type: FETCH_START
    };
};
