export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";

export const playCurrentSong = song => ({
    type: PLAY_CURRENT_SONG,
    song
});