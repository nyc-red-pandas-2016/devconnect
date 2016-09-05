class HomeController < ApplicationController
  def index
  end

  def top_trending
    render json: Post.find_top_trending_posts
  end

  def most_recent
    render json: Post.find_most_recent
  end

  def forum_update
    @top_trending = Post.find_top_trending_posts
    @most_recent = Post.find_most_recent

    render 'forum.json.jbuilder'
  end

end
