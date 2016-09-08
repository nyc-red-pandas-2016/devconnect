class RequestMentorMailer < ApplicationMailer
  default from: 'devconnect@gmail.com'
  layout 'mailer'


  def mentor_email(user, mentor)
    @mentor = mentor
    @user = user
    # binding.pry
    mail(to: @mentor.email, subject: "Hi #{@mentor.first_name}, #{@user.first_name} has requested a mentoring session.")

  end

  def user_email(user, mentor)
    @mentor = mentor
    @user = user

    mail(to: @user.email, subject: "Hi #{@user.first_name}, your request to #{@mentor.first_name} has been sent.")
  end
end
