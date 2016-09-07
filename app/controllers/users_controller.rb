class UsersController < ApplicationController

  def json
    @user = current_user
    render json: @user
  end

  def show
    if !current_user
      redirect_to '/'
      return
    end
    if find_user
      @user = find_user
    else
      @user = User.current_user
    end
  end


  def request_mentor
    mentor_id = params[:mentor_id].scan(/\d/)[0].to_i
    @mentor = User.find(mentor_id)
    # binding.pry
    @user = User.find(params[:user_id])
    RequestMentorMailer.sample_email(@user, @mentor).deliver
  end

  private
  def find_user
    User.find(params[:id])
  end

end
