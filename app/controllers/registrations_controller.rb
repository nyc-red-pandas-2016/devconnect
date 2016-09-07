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
    if skills_info_params

      skill = Skill.find_by(name: skills_info_params[:name])
      Endorsement.create(endorsed_id: current_user.id, endorser_id: current_user.id, skill_id: skill.id)
      if current_user.save
        redirect_to '/users/edit'
      else
        flash[:error] = current_user.errors.full_messages
        redirect_to '/users/edit'
      end

    else

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
        if current_user.save
          if (account_update_params[:password] != "" &&   account_update_params[:password_confirmation] != "")
            redirect_to "/"
          else
            redirect_to "/users/#{current_user.id}/show"
          end
        else
          flash[:error] = current_user.errors.full_messages
          redirect_to '/users/edit'
        end

      end
    end
  end

    def edit
      @contact_info = ContactInfo.new
      @skillsnames = []
      userskillsnames = []
      current_user.skills.each do |userskill|
        userskillsnames << userskill.name
      end
      Skill.all.each do |skill|
        @skillsnames << skill.name
        @skillsnames = @skillsnames - userskillsnames
      end
    end

    def destroy
      if contact_delete_params
        item = current_user.forms_of_contact.find(contact_delete_params[:id])
        item.destroy
        redirect_to '/users/edit'
        return
      elsif skill_delete_params
        item = current_user.endorsements.find_by(skill_id: skill_delete_params[:id])
        item.destroy
        redirect_to '/users/edit'
        return
      end
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

  def skills_info_params
      if params[:skills]
        params.require(:skills).permit(:name, :user_id)
      end
  end

  def account_update_params
    params.require(:user).permit(:id, :location, :status, :place_of_work, :position, :goals, :experience, :bio, :email, :is_mentor, :password, :password_confirmation, :current_password, forms_of_contact_attributes: [:contact_type, :contact_link,:user_id, :id])
  end

  def contact_delete_params
    if params[:contact_info]
      params.require(:contact_info).permit(:id)
    end
  end

  def skill_delete_params
    if params[:skills]
      params.require(:skills).permit(:id)
    end
  end

end
