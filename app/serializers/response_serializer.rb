class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content
  has_one :post
  has_one :user
end
