class UsersController < ApplicationController
  def json
    @user = current_user
    render json:@user
  end
  def show
    @user = current_user.to_json
  end
end
