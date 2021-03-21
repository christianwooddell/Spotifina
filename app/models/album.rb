class Album < ApplicationRecord
    validates :title, :artist_id, :album_art_url, presence: true 

    belongs_to :artist 

    has_many :songs

    has_one_attached :album_cover
end
