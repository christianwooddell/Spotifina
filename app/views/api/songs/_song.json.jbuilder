json.set! song.id do 
    json.extract! song, :title, :artist_id, :album_id, :duration
    json.audio_url url_for(song.audio_file)
end