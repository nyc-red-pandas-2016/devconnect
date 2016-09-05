json.topic @topic
json.post @post
json.user @post.user
json.responses @post.responses do |response|
  json.response response
  json.user response.user
end



# json.topic @topic
# json.posts @topic.posts
# json.posts @topic.posts do |post|
#   json.post post
#   json.user post.user
#   json.responses post.responses do |response|
#     json.response response
#     json.user response.user
#   end
# end
