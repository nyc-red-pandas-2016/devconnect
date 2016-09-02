class Skill < ApplicationRecord
  has_many :endorsements
  has_many :endorsed, through: :endorsements
end
