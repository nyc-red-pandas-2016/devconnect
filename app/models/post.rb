class Post < ApplicationRecord
  belongs_to :postable, polymorphic: true
  has_many :responses
  belongs_to :user
  # belongs_to :topic
  # belongs_to :cohort
end
