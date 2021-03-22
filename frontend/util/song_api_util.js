export const FetchSong = songId => (
    $.ajax({
        method: "GET",
        url: `api/songs/${songId}`
    })
);

export const fetchSong