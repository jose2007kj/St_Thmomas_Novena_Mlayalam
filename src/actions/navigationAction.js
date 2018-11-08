import {
    NAV_MENU_CLICKED,
    NAVIGATE_TO_CONTENT,
    SET_TITLE,
    NAVIGATE_TO_ABOUT
} from './types';

export const navigationMenuClicked = (menu) => {
    return {
        type: NAV_MENU_CLICKED,
        payload: menu,
    };
};

export const navigateToScreen = (screen, item) => {
    switch (screen) {
        case 'Content':
            return {
                type: NAVIGATE_TO_CONTENT,
                payload: item
            };
        case 'About':
            return {
                type: NAVIGATE_TO_ABOUT
            };
        default:
            return 0;
    }
};

export const setNavigationTitle = (title) => {
        return {
            type: SET_TITLE,
            payload: { title }
        };
};