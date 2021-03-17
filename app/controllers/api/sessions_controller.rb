class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "api/users/show" #redirect to home / index 
        else
            render json: ["Incorrect username or password."], status: 401
        end #add a forgot your password?
    end 

    def destroy 
        logout!
        redirect_to "/api/"
    end 
end
