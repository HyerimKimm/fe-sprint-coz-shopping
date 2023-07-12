import { combineReducers } from 'redux';
import isHamburgerClickReducer from './isHamburgerClickReducer';

const rootReducer = combineReducers({
    isHamburgerClickReducer,
});

export default rootReducer;