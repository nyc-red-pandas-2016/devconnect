class Topic < ApplicationRecord
  has_many :posts, as: :postable
end
