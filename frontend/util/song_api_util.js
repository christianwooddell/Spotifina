export const fetchSong = songId => (
    $.ajax({
        method: "GET",
        url: `/api/songs/${songId}`
    })
);

export const fetchSongs = () => (
    $.ajax ({
        method: "GET",
        url: "/api/songs"
    })
);
