import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import ContentReducer from './ContentReducer';

export default combineReducers({
    navigation: NavigationReducer,
    content:ContentReducer
});