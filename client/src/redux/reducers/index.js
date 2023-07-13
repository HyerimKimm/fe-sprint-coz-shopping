import { combineReducers } from 'redux';
import isHamburgerClickReducer from './isHamburgerClickReducer';
import itemsReducer from './itemsReducer';
import bookmarkReducer from './bookmarkReducer';

const rootReducer = combineReducers({
    isHamburgerClickReducer,
    itemsReducer,
    bookmarkReducer,
});

export default rootReducer;