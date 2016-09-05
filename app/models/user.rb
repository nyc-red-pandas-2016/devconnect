class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :endorsements, foreign_key: :endorsed_id
  has_many :skills, through: :endorsements
  belongs_to :cohort
  has_many :responses
  has_many :posts
  has_many :forms_of_contact, class_name: "ContactInfo"

  validates :first_name, :last_name, :cohort_name, :cohort_location, :cohort_year, presence: true
end
