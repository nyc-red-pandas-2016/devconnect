json.topic @topic
json.posts @topic.posts
json.posts @topic.posts do |post|
  json.post post
  json.user post.user
end
