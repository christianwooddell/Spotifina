import  { RECEIVE_CURRENT_SONG } from "../actions/song_actions";

import { merge } from "lodash";

const songsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_SONG:
            return merge({}, state, action.song);
        default: 
            return state;
    }
};

export default songsReducer;