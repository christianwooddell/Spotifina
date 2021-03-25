class User < ApplicationRecord
    validates :username, :dob_day, :dob_month, :dob_year, :session_token, :password_digest, presence: true 
    validates :password, length: {minimum: 8, allow_nil: true}
    validates :email, presence: true, uniqueness: true
    validates :gender, inclusion: {in: ["Male", "Female", "Non-binary"]}
    # validates :premium, inclusion: {in: [true, false]}
    
    attr_reader :password 

    after_initialize :ensure_session_token

    #has_many liked_songs, playlists

    
    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 
    
    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
    end 

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end 

    private 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end 
    
end 