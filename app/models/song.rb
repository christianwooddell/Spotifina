class Song < ApplicationRecord
    validates :title, :album_id, :artist_id, presence: true

    #belongs_to :album
    #has_one :artist 

    #has_one_attached :audio_file
    
end
