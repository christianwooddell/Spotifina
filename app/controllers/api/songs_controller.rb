class Api::SongsController < ApplicationController 

    def show 
        @song = Song.includes(:album, :artist).with_attached_audio_file.find(params[:id])
        if @song 
            render :song 
        else 
            render json: @song.errors.full_messages, status: 422 
        end 
    end 
    

end 