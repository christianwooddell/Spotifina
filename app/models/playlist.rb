class Playlist < ApplicationRecord
    validates :name, :user_id, presence: true 

    belongs_to :user 

    has_many :playlist_songs
    has_many :songs,
        through: :playlist_songs,
        source: :song
end
