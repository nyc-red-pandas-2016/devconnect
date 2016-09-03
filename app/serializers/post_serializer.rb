class PostSerializer < ActiveModel::Serializer
  attributes :id, :title,:content,:user_id

  has_one :user
  has_many :responses
end
