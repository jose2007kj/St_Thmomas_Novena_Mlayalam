import { 
    FETCH_ERROR, 
    FETCH_START,
    CONTENT_FETCHED,
    } from './types';
import prayerData from '../assets/contents.json';


export const fetchContentRemote = (page) => {
    console.log('json data is:'+page);
    return (dispatch) => {
        try{
            switch(page){
                case 'intro':
                    console.log('data fetched from json:', JSON.stringify(prayerData.intro));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.intro }); 
                    break;
                case 'introSong1':
                console.log('data fetched from json:', JSON.stringify(prayerData.introSong1));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.introSong1 }); 
                    break;
                case 'introSong2':
                console.log('data fetched from json:', JSON.stringify(prayerData.introSong2));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.introSong2 }); 
                    break;
                case 'praiseSongs':
                console.log('data fetched from json:', JSON.stringify(prayerData.praiseSongs));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.praiseSongs }); 
                    break;
                case 'thanksGiving':   
                console.log('data fetched from json:', JSON.stringify(prayerData.thanksGiving));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.thanksGiving }); 
                    break;
                case 'lastBlessing':
                console.log('data fetched from json:', JSON.stringify(prayerData.lastBlessing));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.lastBlessing }); 
                    break;
                case 'finalSong1':   
                console.log('data fetched from json:', JSON.stringify(prayerData.finalSong1));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.finalSong1 }); 
                    break;
                default :   
                console.log('data fetched from json:', JSON.stringify(prayerData.finalSong2));
                    dispatch({ type: CONTENT_FETCHED, payload: prayerData.finalSong2 }); 
                
            }

            
        }
        catch{
            console.log(error);
            dispatch({ type: FETCH_ERROR, payload: error });
        }
        // fetch('../assets/contents.json')
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log('data fetched from json:', JSON.stringify(data));
        //     dispatch({ type: CONTENT_FETCHED, payload: data.data });
        // })
        // .catch(error => {
        //     console.log(error);
        //     dispatch({ type: FETCH_ERROR, payload: error });
        // });
        
    };
};
export const fetchContentInit = () => {
    return {
        type: FETCH_START
    };
};
