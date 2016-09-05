class UserSerializer < ActiveModel::Serializer
  attributes :id,:email,:first_name, :last_name, :bio,:experience,:location,:position,:goals,:is_mentor,:status,:place_of_work,:is_mentor

  has_many :endorsements, foreign_key: :endorsed_id
  has_many :skills, through: :endorsements
  belongs_to :cohort
  has_many :responses
  has_many :posts
  has_many :forms_of_contact, class_name: "ContactInfo"
end
