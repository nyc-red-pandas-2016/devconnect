class MentorsController < ApplicationController
  def index
    @mentors = User.where(is_mentor:true)
    @locations = Cohort.all.map{|cohort| cohort.location}

    render component:"FindMentors", props:{mentors:@mentors,locations:@locations.uniq}
  end

  def search
    @mentors = Array.new
    # @mentors << User.where("is_mentor = ? AND location = ? ", true ,mentor_params[:location])
    @search_skills = mentor_params[:skills].split(",")
    @skilledMentor = @search_skills.map do |skill|
       Skill.where(["name LIKE ?","%#{skill.strip.downcase}%"])
    end
    @skilledMentor.flatten.map do |skill|
      skill.endorsed.each do |endorsed|
        if endorsed.location == mentor_params[:location]
           @mentors << User.where("is_mentor = ? AND location = ? ", true ,mentor_params[:location])
           @mentors << endorsed
        end
      end
    end
    render json:@mentors.flatten.uniq
  end

  private
    def mentor_params
      params.require(:mentor).permit(:skills, :location)
    end
end
