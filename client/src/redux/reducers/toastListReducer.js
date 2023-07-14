import { INSERT_TOAST, REMOVE_TOAST } from "../actions/toastAction";
import { toastListInitialState } from "./initialState";

//초기값 : { toastList:[] }
const toastListReducer = (state=toastListInitialState,action) => {
    switch(action.type) {
        case INSERT_TOAST: 
            return {
                toastList: [...state.toastList, action.payload]
            };
        case REMOVE_TOAST:
            return {
                toastList: state.toastList.slice(1,100)
            }
        default: 
            return state;
    }
}

export default toastListReducer;