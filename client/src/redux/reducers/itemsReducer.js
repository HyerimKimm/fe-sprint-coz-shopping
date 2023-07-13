import { GET_ITEMS } from "../actions/itemsAction";
import { itemsInitialState } from "./initialState";

const itemsReducer = (state=itemsInitialState, action) => {
    switch(action.type){
        case GET_ITEMS: return action.items;
        default: return state;
    }
}

export default itemsReducer;