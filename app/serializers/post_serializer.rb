class PostSerializer < ActiveModel::Serializer
  attributes :id, :title,:content,:user_id,:postable_id,:postable_type,:created_at,:updated_at

  has_one :user
  has_many :responses
end
