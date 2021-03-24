import { PLAY_CURRENT_SONG } from "../actions/player_actions";
import { merge } from "lodash";

const currentSongReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case PLAY_CURRENT_SONG: 
            return merge({}, state, action.song);
        default: 
            return state;
    }
};

export default currentSongReducer;