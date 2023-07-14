import { UPDATE_TOAST_LIST } from "../actions/toastAction";
import { toastListInitialState } from "./initialState";

const toastListReducer = (state=toastListInitialState,action) => {
    switch(action.type) {
        case UPDATE_TOAST_LIST: 
            return action.toastList;
        default: 
            return state;
    }
}

export default toastListReducer;