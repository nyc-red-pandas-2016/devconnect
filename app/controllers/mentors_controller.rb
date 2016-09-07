class MentorsController < ApplicationController
  def index
    @mentors = User.where(is_mentor:true)
    @locations = Cohort.all.map{|cohort| cohort.location}

    render component:"FindMentors", props:{mentors:@mentors,locations:@locations.uniq}
  end

  def search
    @mentors = User.where("is_mentor = ? AND location = ? ", true ,mentor_params[:location])
    @search_skills = mentor_params[:skills].split(",")
    @foundMentor = []
    @foundMentor = @mentors.each do |mentor|
      binding.pry
      return mentor if mentor.skills.ransack(name_in:@search_skills)
    end
    @mentorSkills = Skill.ransack(name_in: @search_skills)
    @mentor = Mentor.ransack(mentor_params["skills"])
  end

  private
    def mentor_params
      params.require(:mentor).permit(:skills, :location)
    end
end
