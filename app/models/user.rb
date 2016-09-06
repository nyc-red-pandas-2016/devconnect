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

  accepts_nested_attributes_for :forms_of_contact, :allow_destroy => true

  validates :first_name, :last_name, :cohort_name, :cohort_location, :cohort_year, presence: true


  # This method associates the attribute ":avatar" with a file attachment
 has_attached_file :avatar, styles: {
   thumb: '100x100>',
   square: '200x200#',
   medium: '300x300>'
 }

 # Validate the attached image is image/jpg, image/png, etc
 validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
end
