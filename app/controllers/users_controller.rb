class UsersController < ApplicationController
  def json
    @user = current_user
    render json: @user
  end

  def show
    @user = current_user.to_json
  end

  def request_mentor
    binding.pry
    @user = current_user
    RequestMentorMailer.sample_email(@user).deliver
  end
end
