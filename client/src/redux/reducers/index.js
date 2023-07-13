import { combineReducers } from 'redux';
import isHamburgerClickReducer from './isHamburgerClickReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
    isHamburgerClickReducer,
    itemsReducer,
});

export default rootReducer;