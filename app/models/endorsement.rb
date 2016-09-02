class Endorsement < ApplicationRecord
  belongs_to :endorser, class_name: "User"
  belongs_to :endorsed, class_name: "User"
  belongs_to :skill
end
