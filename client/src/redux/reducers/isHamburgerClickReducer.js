import { isHamburgerClickInitialState } from "./initialState";
import { UPDATE_IS_HAMBURGER_CLICK } from '../actions/isHamburgerClickAction';

const isHamburgerClickReducer = (state=isHamburgerClickInitialState, action) => {
    switch(action.type) {
        case UPDATE_IS_HAMBURGER_CLICK:
            return state? false : true;
        default: 
            return state;
    }
}

export default isHamburgerClickReducer;