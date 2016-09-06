# Preview all emails at http://localhost:3000/rails/mailers/request_mentor
class RequestMentorPreview < ActionMailer::Preview
  def sample_mail_preview
    RequestMentorMailer.sample_email(User.first)
  end
end
