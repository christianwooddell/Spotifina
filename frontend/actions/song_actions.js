import { fetchSong, fetchSongs } from "../util/song_api_util";

export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";

export const getSong = songId => dispatch => fetchSong(songId)
    .then(song => dispatch({type: RECEIVE_CURRENT_SONG, song}));

export const getSongs = () => dispatch => fetchSongs()
    .then(songs => dispatch({type: RECEIVE_ALL_SONGS, songs}));