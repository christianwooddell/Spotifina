class Api::SessionsController < ApplicationController
    def create 
        @user.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            log_in!(@user)
            redirect_to "/" #redirect to home / index 
        else
            render json: ["Incorrect username or password."], status: 401
        end #add a forgot your password?
    end 

    def destroy 
        log_out!
        redirect_to "/"
    end 
end
