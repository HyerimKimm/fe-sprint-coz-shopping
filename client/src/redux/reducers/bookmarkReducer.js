import { GET_BOOKMARK } from "../actions/bookmarkAction";
import { bookmarkInitialState } from "./initialState";

const bookmarkReducer = (state=bookmarkInitialState,action) => {
    switch(action.type) {
        case GET_BOOKMARK: 
            return action.bookmarks===null?state:action.bookmarks;
        default: 
            return state;
    }
}

export default bookmarkReducer;