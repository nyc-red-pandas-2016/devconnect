class MentorsController < ApplicationController
  def index

      if !current_user
        redirect_to '/'
        return
      end
    @mentors = User.where(is_mentor:true)
    @locations = Cohort.all.map{|cohort| cohort.location}

    render component:"FindMentors", props:{mentors:@mentors,locations:@locations.uniq}
  end

  def search
    @mentors = Array.new
    @skilledMentors = Array.new

    # make skills into an array
    @search_skills = mentor_params[:skills].split(",")

    if mentor_params[:skills].empty?

      # get all of the user with the location only
        @mentors << User.where("is_mentor = ? AND location = ? ", true ,mentor_params[:location])
        render json:@mentors.flatten.uniq
      else
        # get all of the user with skills and location

        # will search for matching text on skills
        @mentorSkills = @search_skills.map do |skill|
          Skill.where(["name LIKE ?","%#{skill.strip.downcase}%"])
        end

        @mentorSkills.flatten.map do |skill|
          skill.endorsed.each do |endorsed|
            if endorsed.location == mentor_params[:location]
              @mentors << User.where("is_mentor = ? AND location = ? ", true ,mentor_params[:location])
              @mentors << endorsed
            end
          end
        end
        # fillter mentors with skills
        @mentors.flatten.each do |mentor|
          @skilledMentors << mentor if !mentor.skills.empty?
        end

        # return a json object
        render json:@skilledMentors.flatten.uniq
    end





  end

  private
    def mentor_params
      params.require(:mentor).permit(:skills, :location)
    end
end
