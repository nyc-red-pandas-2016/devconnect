class RequestMentorMailer < ApplicationMailer
  default from: 'devconnect@gmail.com'
  layout 'mailer'

  def sample_email(user)
    @user = user
    mail(to: @user.email, subject: 'Sample Email')
  end
end
