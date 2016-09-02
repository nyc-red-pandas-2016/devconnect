class Post < ApplicationRecord
  belongs_to :postable, polymorphic: true
  has_many :responses
end
