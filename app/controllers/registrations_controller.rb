class RegistrationsController < Devise::RegistrationsController

  def new
      names = []
      years = []
      locations = []
      Cohort.all.each do |cohort|
        names << cohort.name
        years << cohort.year
        locations << cohort.location
  end

      @cohortsnames = names.uniq
      @cohortsyears = years.uniq
      @cohortslocations = locations.uniq
      super
    end

  def create
    cohort = Cohort.find_by(name: params[:user][:cohort_name], location: params[:user][:cohort_location], year: params[:user][:cohort_year])
    if cohort != nil
      user = User.new(sign_up_params)
      user.cohort_id = cohort.id
    else
      flash[:error] = ["The cohort you selected doesn't exist!"]
      redirect_to '/users/sign_up'
      return
    end
      if user.save
        redirect_to '/home/index'
      else
        flash[:error] = user.errors.full_messages
        redirect_to '/users/sign_up'
      end
    end

  def update

    update_resource(current_user, account_update_params)
binding.pry
    if current_user.save
      redirect_to '/home/index'
    else
      flash[:error] = current_user.errors.full_messages
      redirect_to '/users/edit'
    end
    # super
  end

  private
  def cohort_params
    params.require(:user).permit(:cohort_name, :cohort_year, :cohort_location)
  end

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :cohort_name, :cohort_year, :cohort_location, :email, :is_mentor, :location, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:location, :status, :place_of_work, :position, :goals, :experience, :bio, :email, :password, :password_confirmation, :current_password, contact_info_attributes: [:user_id, :contact_type, :contact_link, :id])

    # params.require(:contact_info).permit(:contact_type, :contact_link)
  end

  # def contact_info_params
  #   params[:user][:contact_info]
  # end
  # def contact_info_update_params
  #
  #   binding.pry
  # end
end
