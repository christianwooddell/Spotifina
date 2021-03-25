# class Api::AlbumsController < ApplicationController 

#     def show 
#         @album = Album.includes(:artist, :songs).with_attached_album_cover.find(params[:id])
#         if @album 
#             @songs = @album.songs.with_attached_audio_file
#             render :show 
#         else
#             render json: @album.errors.full_messages, status: 422 
#         end 
#     end 

# end     
