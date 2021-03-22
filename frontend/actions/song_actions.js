import { fetchSong } from "../util/song_api_util";

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

export const getSong = songId => dispatch => fetchSong(songId)
    .then(songId => dispatch({type: RECEIVE_CURRENT_SONG, songId}));