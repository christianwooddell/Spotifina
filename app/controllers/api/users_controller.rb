class Api::UsersController < ApplicationController
    def create 
        @user = User.create(user_params)
        if @user.save
            log_in!(@user)
            render "/api/" #render homepage is user is logged in
        else 
            render json: ["This email is already connected to an account. Log in."] #text "log in" is link to login page
        end 
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :birthday, :gender, :premium, :email)
    end 


end
