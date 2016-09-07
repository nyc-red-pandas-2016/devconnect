class RequestMentorMailer < ApplicationMailer
  default from: 'devconnect@gmail.com'
  layout 'mailer'


  def sample_email(user, mentor)
    @mentor = mentor
    @user = user
    # binding.pry
    mail(to: @mentor.email, subject: "Hi #{@mentor.first_name}, #{@user.first_name} has requested a mentoring session.")
  end
end
