import { combineReducers } from 'redux';
import isHamburgerClickReducer from './isHamburgerClickReducer';
import itemsReducer from './itemsReducer';
import bookmarkReducer from './bookmarkReducer';
import isModalOpenReducer from './isModalOpenReducer';

const rootReducer = combineReducers({
    isHamburgerClickReducer,
    itemsReducer,
    bookmarkReducer,
    isModalOpenReducer,
});

export default rootReducer;