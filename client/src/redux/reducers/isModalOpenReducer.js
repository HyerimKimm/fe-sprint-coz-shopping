import { UPDATE_IS_MODAL_OPEN } from "../actions/isModalOpenAction";
import { isModalOpenInitialState } from "./initialState";

const isModalOpenReducer = (state=isModalOpenInitialState, action) => {
    switch(action.type) {
        case UPDATE_IS_MODAL_OPEN : 
            return action.value;
        default: 
            return state;
    }
}

export default isModalOpenReducer;