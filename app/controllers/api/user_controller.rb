class Api::UserController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
        login(@user)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
    end
  end

  private
  
  def user_params
    self.params.require(:user).permit(:email, :password)
  end

end