class Api::SongsController < ApplicationController 

    def index 
        @songs = Song.all 
        render :index 
    end 
    
    def show 
        @song = Song.includes(:album, :artist).with_attached_audio_file.find(params[:id])
        if @song 
            render :show
        else 
            render json: @song.errors.full_messages, status: 422 
        end 
    end 


    private 

    def song_params 
        params.require(:song).permit(:title, :artist_id, :album_id, :duration)

end 