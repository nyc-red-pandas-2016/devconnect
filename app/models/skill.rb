class Skill < ApplicationRecord
  has_many :users, through: :endorsements
end
