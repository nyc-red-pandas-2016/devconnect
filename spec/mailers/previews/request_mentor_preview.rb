# Preview all emails at http://localhost:3000/rails/mailers/request_mentor
class RequestMentorPreview < ActionMailer::Preview
  def sample_mail_preview
    RequestMentorMailer.mentor_email(User.find(1), User.find(1))
    # RequestMentorMailer.user_email(User.find(1), User.find(1))
  end
end
