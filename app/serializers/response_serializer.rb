class ResponseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :post ,include :all
end
