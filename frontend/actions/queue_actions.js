import { RECEIVE_ALL_SONGS } from "./song_actions";

export const NEXT_UP = "NEXT_UP";
export const PREVIOUS_UP = "PREVIOUS_UP";
// export const GET_SONG_LIST = "GET_SONG_LIST";

export const nextUp = numIndex => ({
    type: NEXT_UP,
    songIndex
});

export const previousUp = numIndex => ({
    type: PREVIOUS_UP,
    songIndex
});



