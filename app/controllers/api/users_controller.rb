class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show #render homepage is user is logged in
        else 
            render json: @user.errors.full_messages, status: 422 
        end 
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :password, :dob_month, :dob_day, :dob_year, :gender, :email)
    end 


end
