class TopicsController < ApplicationController
  def index
      @topics = Topic.all
      render json: @topics#, include: 'posts.responses, posts.user', fields: {posts: {responses: [:content], user: [:id, :first_name]} }
  end

  def show
    topic = Topic.find(params[:id])
      posts = topic.posts
      render json: posts
  end

end
