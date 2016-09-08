class UsersController < ApplicationController
skip_before_filter  :verify_authenticity_token

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

  def avatar
    @user = current_user
    render '/users/testpaperclip'
  end

  def endorsement
    @endorsed = User.find(params[:user_id])
    @endorser = User.find(params[:current_user])
    @skill = Skill.find(params[:skill_id])


      if @skill.endorsements.where(endorser_id: @endorser.id, endorsed_id: @endorsed.id).length == 0


        if @endorsed.id != @endorser.id
          @skill = Skill.find(params[:skill_id]).endorsements.new(endorsed_id: @endorsed.id, endorser_id: @endorser.id)

          if @skill.save
            flash[:notice] = "You have successfully endorsed #{@endorsed.first_name.capitalize}!"
            # binding.pry
            # redirect_to "users/#{@endorsed.id}/show"
            render json: {skills: @endorsed.skills.uniq, endorsements: @endorsed.endorsements}
            # @endorsed.endorsements
          else
            flash[:error] = "Sorry your endorsement didn't go through. Please try again later."
            redirect_to "users/#{@endorsed.id}/show"
          end
        end
      end
  end


  private

  def find_user
    User.find(params[:id])
  end

end
