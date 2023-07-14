import { combineReducers } from 'redux';
import isHamburgerClickReducer from './isHamburgerClickReducer';
import itemsReducer from './itemsReducer';
import bookmarkReducer from './bookmarkReducer';
import isModalOpenReducer from './isModalOpenReducer';
import toastListReducer from './toastListReducer';

const rootReducer = combineReducers({
    isHamburgerClickReducer,
    itemsReducer,
    bookmarkReducer,
    isModalOpenReducer,
    toastListReducer,
});

export default rootReducer;