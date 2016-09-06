class MentorsController < ApplicationController
  def index
    @mentors = User.where(is_mentor:true)
    @locations = Cohort.all.map{|cohort| cohort.location}

    render component:"FindMentors", props:{mentors:@mentors,locations:@locations.uniq}
  end

  def search

    binding.pry


  end

  private
    def mentor_params
      params.require(:mentor).permit(:skills, :location)
    end
end
