class Cohort < ApplicationRecord
  has_many :users
  has_many :posts, as: :postable
end
