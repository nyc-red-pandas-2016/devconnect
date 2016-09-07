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
    # binding.pry
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
        binding.pry
        redirect_to '/home/index'
      else
        flash[:error] = user.errors.full_messages
        redirect_to '/users/sign_up'
      end
    end

  def update
    if contact_info_params
        current_user.forms_of_contact << ContactInfo.new(contact_info_params)
        if current_user.save
          redirect_to '/users/edit'
        else
          flash[:error] = current_user.errors.full_messages
          redirect_to '/users/edit'
        end
    else

      update_resource(current_user, account_update_params)
      # binding.pry
      if current_user.save
        redirect_to '/home/index'
      else
        flash[:error] = current_user.errors.full_messages
        redirect_to '/users/edit'
      end
    end
  end

    def edit
      @contact_info = ContactInfo.new
      # params.require(:contact_info).permit(:contact_type, :contact_link, :user_id)

    end

    def destroy
#       if request.xhr?
#   response
# else
  item = current_user.forms_of_contact.find(contact_delete_params[:id])
  item.destroy
  # binding.pry
  redirect_to '/users/edit'
  return
# end



    end


  private
  def cohort_params
    params.require(:user).permit(:cohort_name, :cohort_year, :cohort_location)
  end


  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :cohort_name, :cohort_year, :cohort_location, :email, :is_mentor, :location, :password, :password_confirmation)
  end


  def contact_info_params
      if params[:contact_info]
        params.require(:contact_info).permit(:contact_type, :contact_link, :user_id)
      end
  end

  def account_update_params

    params.require(:user).permit(:id, :location, :status, :place_of_work, :position, :goals, :experience, :bio, :email, :password, :password_confirmation, :current_password, forms_of_contact_attributes: [:contact_type, :contact_link,:user_id, :id])

  end

  def contact_delete_params
    params.require(:contact_info).permit(:id)
  end

end
