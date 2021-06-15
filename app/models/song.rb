class Song < ApplicationRecord
    validates :title, :album_id, :artist_id, :duration, presence: true

    belongs_to :album
    belongs_to :artist 

    has_one_attached :audio_file

end
