class Artist < ApplicationRecord
    validates :name, :bio, presence: true 

    has_many :albums 
    has_many :songs 

    
end
