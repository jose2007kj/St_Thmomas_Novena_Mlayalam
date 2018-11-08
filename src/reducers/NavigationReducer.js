import { Actions } from 'react-native-router-flux';
import {
    NAV_MENU_CLICKED,
    NAVIGATE_TO_CONTENT,
    SET_TITLE,
    NAVIGATE_TO_ABOUT
} from '../actions/types';

const INITIAL_STATE = {
    menu: 'Intro',
    page: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAV_MENU_CLICKED:
            return { ...state, menu: action.payload };
        case NAVIGATE_TO_CONTENT:
            switch (action.payload) {
                case 'intro':
                    Actions.intro({ item: action.payload });
                    break;
                case 'introSong1':
                    Actions.introSong1({ item: action.payload });
                    break;
                case 'introSong2':
                    Actions.introSong2({ item: action.payload });
                    break;
                case 'praiseSongs':
                    Actions.praiseSongs({ item: action.payload });
                    break;
                case 'thanksGiving':
                    Actions.thanksGiving({ item: action.payload });
                    break;
                case 'lastBlessing':
                    Actions.lastBlessing({ item: action.payload });
                    break;
                case 'finalSong1':
                    Actions.finalSong1({ item: action.payload });
                    break;    
                default:
                    Actions.finalSong2({ item: action.payload });
            }
            return { ...state, menu: 'content', page: action.payload };
        case SET_TITLE:
            Actions.refresh({ title: action.payload });
            return state;
        case NAVIGATE_TO_ABOUT:
            Actions.about();
        default:
            return state;
    }
};