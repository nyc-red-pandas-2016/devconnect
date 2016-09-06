class UsersController < ApplicationController
  def json
    @user = current_user
    render json: @user
  end

  def show
    @user = current_user.to_json
  end

  def request_mentor
    mentor_id = params[:mentor_id].scan(/\d/)[0].to_i
    @mentor = User.find(mentor_id)
    # binding.pry
    @user = current_user
    RequestMentorMailer.sample_email(@user, @mentor).deliver
  end
end
