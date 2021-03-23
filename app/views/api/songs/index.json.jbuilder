json.array! @songs do |song| 
    json.extract! song, :id, :title 
    json.audioFile url_for(song.audio_file)
end 