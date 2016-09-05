class Post < ApplicationRecord
  belongs_to :postable, polymorphic: true
  has_many :responses
  belongs_to :user
  # belongs_to :topic
  # belongs_to :cohort

  def self.find_top_trending_posts
    posts = Post.all
    sorted_posts = posts.sort { |a,b| b.responses.count <=> a.responses.count }
    sorted_posts.first(10)
  end

  def self.find_most_recent
    most_recent = Post.all.order(created_at: :desc).limit(10)
  end
end
