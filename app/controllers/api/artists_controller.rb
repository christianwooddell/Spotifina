# class Api::ArtistsController < ApplicationController 

#     def show 
#         @artist = Artist.includes(:album, :songs).with_attached_artist_image.find(params[:id])
#         if @artist 
#             @albums = @artist.albums.includes(:songs).with_attached_album_cover
#             render :show 
#         else
#             render json: @artist.errors.full_messages, status: 422 
#         end 
#     end 

# end 
